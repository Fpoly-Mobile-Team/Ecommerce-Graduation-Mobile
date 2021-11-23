import {Close, PlusOnly} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState, useEffect, Fragment} from 'react';
import {Image, ScrollView, Pressable, Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import ImagePickerModalDenounce from './components/ImagePickerModalDenounce';
import ImageViewer from 'react-native-image-zoom-viewer';
import {width} from '@utils/responsive';

const SelectImage = ({files, setFiles}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  useEffect(() => {
    setIsVisible(false);
  }, [closeModal]);

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

  const selectFromCamera = () =>
    ImagePicker.openCamera({
      cropping: false,
      includeExif: true,
      mediaType: 'photo',
    })
      .then(image => {
        setFiles([...files, image]);
        setCloseModal(true);
      })
      .then(() => {
        setCloseModal(false);
      })
      .catch(e => {});

  const _ModalBottom = () => {
    return (
      <Block radius={4} alignCenter justifyCenter>
        <Pressable onPress={() => setIsVisible(true)}>
          <Block
            alignCenter
            justifyCenter
            borderWidth={1}
            width={55}
            height={55}
            borderStyle={'dashed'}
            borderColor={theme.colors.paleGreen}
            radius={55}>
            <PlusOnly />
          </Block>
        </Pressable>
      </Block>
    );
  };

  return (
    <Block paddingHorizontal={10} paddingVertical={5}>
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
        <Block row alignCenter width={width} paddingRight={15} marginTop={3}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {files
              ? files.map((file, index) => (
                  <Pressable
                    style={styles.wrapper}
                    key={file.path}
                    onPress={() => setViewingIndex(index)}>
                    <Image source={{uri: file.path}} style={styles.imgShow} />
                    <Block absolute top={0} right={10}>
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
            <_ModalBottom />
          </ScrollView>
        </Block>
      </Fragment>
      <ImagePickerModalDenounce
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        openPicker={selectFromGallery}
        openCamera={selectFromCamera}
      />
    </Block>
  );
};
export default SelectImage;
