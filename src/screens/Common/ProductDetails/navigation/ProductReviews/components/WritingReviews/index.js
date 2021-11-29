import {Block, Text, Button} from '@components';
import React, {useState, useEffect, Fragment} from 'react';
import {Image, Pressable, TextInput, ScrollView, Modal} from 'react-native';
import {theme} from '@theme';
import styles from './styles';
import {Camering, Close} from '@assets/svg/common';
import StarRating from '../StarRating';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import storage from '@react-native-firebase/storage';
import {Toast} from '@utils/helper';
import ImagePicker from 'react-native-image-crop-picker';
import ImageViewer from 'react-native-image-zoom-viewer';
import {width} from '@utils/responsive';

const WritingReviews = ({_id, check, isClosed}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const isLoading = useSelector(state => state.addProductReview?.isLoading);
  const isLoadingUpdate = useSelector(
    state => state.updateProductReview?.isLoading,
  );
  const [files, setFiles] = useState([]);
  const [ImageViwerIsVisible, showImageViwer] = useState(false);
  let [viewingIndex, setViewingIndex] = useState(-1);
  useEffect(() => {
    viewingIndex !== -1 && showImageViwer(true);
  }, [viewingIndex]);
  useEffect(() => {
    !ImageViwerIsVisible && setViewingIndex(-1);
  }, [ImageViwerIsVisible]);

  const selectFromGallery = () =>
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then(image => {
        setFiles([...files, image].flat());
        setCloseModal(true);
      })
      .then(() => {
        setCloseModal(false);
      })
      .catch(e => {});
  const [rating, setRating] = useState(check ? check?.rating : 0);
  const [review, setReview] = useState(check ? check?.review : '');

  const _onPress = () => {
    isClosed.current.close();
  };

  const filename = files.map(file => file);
  const onSubmit = async () => {
    if (rating < 1) {
      Toast('Vui lòng chọn thang điểm đánh giá');
    } else if (files) {
      let images = [];

      for (let index = 0; index < filename?.length; index++) {
        const name = filename[index]?.path.substring(
          filename[index]?.path.lastIndexOf('/') + 1,
        );

        const path = 'ProductReview/' + name;
        const response = await fetch(filename[index]?.path);
        const file = await response.blob();
        let upload = await storage().ref(path).put(file);
        const url = await storage().ref(path).getDownloadURL();
        images.push(url);
      }

      const data = {
        userId: user,
        rating: rating,
        review: review,
        image: images,
      };

      dispatch({
        type: actions.ADD_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(data),
        },
      });

      _onPress();
    } else {
      const data = {
        userId: user,
        rating: rating,
        review: review,
      };

      dispatch({
        type: actions.ADD_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(data),
        },
      });
      _onPress();
    }
  };

  const onEdit = async () => {
    if (rating < 1) {
      Toast('Vui lòng chọn thang điểm đánh giá');
    } else if (files) {
      let multiline = [];

      for (let index = 0; index < filename?.length; index++) {
        const name = filename[index]?.path.substring(
          filename[index]?.path.lastIndexOf('/') + 1,
        );

        const path = 'ProductReview/' + name;
        const response = await fetch(filename[index]?.path);
        const file = await response.blob();
        let upload = await storage().ref(path).put(file);
        const url = await storage().ref(path).getDownloadURL();
        multiline.push(url);
      }

      const DataObject = {
        _id: check?._id,
        userId: user,
        rating: rating,
        review: review,
        image: multiline,
      };

      dispatch({
        type: actions.UPDATE_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(DataObject),
        },
      });

      _onPress();
    } else {
      const DataObject = {
        _id: check?._id,
        userId: user,
        rating: rating,
        review: review,
      };

      dispatch({
        type: actions.UPDATE_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(DataObject),
        },
      });
      _onPress();
    }
  };

  const _renderMapImages = (item, index) => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {files
          ? files.map((file, index) => (
              <Pressable
                style={styles.wrapper}
                key={file.path}
                onPress={() => setViewingIndex(index)}>
                <Image source={{uri: file.path}} style={styles.imgShow} />
                <Block absolute top={15} right={10}>
                  <Pressable
                    onPress={() =>
                      ImagePicker.cleanSingle(file.path)
                        .then(() =>
                          setFiles(files.filter(f => f.path !== file.path)),
                        )
                        .catch(e => {})
                    }>
                    <Close
                      width={15}
                      height={15}
                      backgroundColor={theme.colors.lightGray}
                      color={theme.colors.white}
                    />
                  </Pressable>
                </Block>
              </Pressable>
            ))
          : null}
        <_renderCamering />
      </ScrollView>
    );
  };

  const _renderCamering = () => {
    return (
      <Block marginTop={16} radius={4} alignCenter justifyCenter>
        <Pressable onPress={selectFromGallery} style={styles.wrapperCamera}>
          <Camering />
        </Pressable>
        <Text fontType="semibold" size={12}>
          Thêm ảnh
        </Text>
      </Block>
    );
  };
  return (
    <Block flex paddingHorizontal={12}>
      <>
        <Block alignCenter>
          <StarRating
            startingValue={rating}
            imageSize={36}
            readonly
            onFinishRating={rating => setRating(rating)}
          />
          <Text
            size={18}
            fontType="semibold"
            paddingHorizontal={0}
            center
            marginTop={32}
            lineHeight={22}
            marginBottom={16}>
            {'Hãy chia sẻ ý kiến của bạn về sản phẩm'}
          </Text>
        </Block>
        <Block
          style={styles.shadow}
          height={155}
          backgroundColor={theme.colors.white}
          radius={8}
          paddingHorizontal={12}
          marginBottom={12}>
          <TextInput
            style={styles.input}
            placeholder="Nhập nội dung đánh giá"
            value={review}
            onChangeText={text => setReview(text)}
            multiline
          />
        </Block>
        <Fragment>
          {!!ImageViwerIsVisible && (
            <Modal
              transparent={true}
              onRequestClose={() => showImageViwer(false)}>
              <ImageViewer
                imageUrls={files.map(f => ({url: f.path}))}
                index={viewingIndex}
              />
            </Modal>
          )}
          <Block
            row
            alignCenter
            width={width}
            paddingRight={15}
            paddingBottom={20}>
            <_renderMapImages />
          </Block>
        </Fragment>
        <Button
          disabled={check ? isLoadingUpdate : isLoading}
          onPress={check ? onEdit : onSubmit}
          title={check ? 'SỬA NHẬN XÉT' : 'GỬI NHẬN XÉT'}
          height={45}
          shadow
          style={styles.button}
          elevation={10}
        />
      </>
    </Block>
  );
};
export default WritingReviews;
