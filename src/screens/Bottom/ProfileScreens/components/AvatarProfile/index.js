import {icons} from '@assets';
import {Block, LazyImage, Text} from '@components';
import React, {useState, useEffect} from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useImagePicker} from '@hooks';
import styles from './styles';
import ImagePickerModal from '../ImagePickerModal';
import actions from '@redux/actions';
import {useIsFocused} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';

const AvatarProfile = () => {
  const dispatch = useDispatch();
  const focus = useIsFocused();
  const userInfo = useSelector(state => state.userInfo?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const data = useSelector(state => state.productViewed?.data);
  const myReview = useSelector(state => state.myReview?.data);

  const {openPicker, openCamera, closeModal, picture, cleanUp} =
    useImagePicker();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
  }, [closeModal]);

  useEffect(() => {
    if (picture) {
      const path = 'AvatarProfile/' + picture?.name;
      return new Promise(async (res, rej) => {
        const response = await fetch(picture?.uri);
        const file = await response.blob();

        let upload = storage().ref(path).put(file);

        upload.on(
          'state_changed',
          snapshot => {},
          err => {
            rej(err);
          },
          async () => {
            const url = await upload.snapshot.ref.getDownloadURL();

            res(url);
            dispatch({
              type: actions.UPDATE_AVATAR,
              body: {
                id: user,
                avatar: url,
              },
              user,
              onFinish: () => cleanUp(),
            });
          },
        );
      });
    }
  }, [dispatch, user, picture, cleanUp]);

  useEffect(() => {
    if (focus) {
      dispatch({type: actions.GET_PRODUCT_VIEWED, user});
    }
  }, [dispatch, focus, user]);

  useEffect(() => {
    if (focus) {
      dispatch({type: actions.GET_MY_REVIEW, user});
    }
  }, [dispatch, user, focus]);

  return (
    <Block>
      <Block row marginTop={20} paddingHorizontal={12}>
        <Block alignCenter justifyCenter width={80} height={80}>
          <LazyImage
            source={{
              uri: userInfo?.avatar,
            }}
            thumbnailSource={{uri: userInfo?.avatar}}
            style={styles.avatar}
          />

          <Block style={styles.wrapIconCamera}>
            <Pressable onPress={() => setIsVisible(true)}>
              <Image
                source={icons.camera}
                style={styles.iconCamera}
                resizeMode="contain"
              />
            </Pressable>
          </Block>
        </Block>
        <Block marginLeft={10} paddingHorizontal={4}>
          <Text marginTop={10} size={16} fontType="semibold">
            {userInfo?.username}
          </Text>
          <Text>{userInfo?.email}</Text>
        </Block>
      </Block>
      <Block flex row marginTop={10}>
        <Block flex alignCenter justifyCenter>
          <Text marginBottom={5} fontType="bold">
            {data?.length}
          </Text>
          <Text>Xem gần đây</Text>
        </Block>
        <Block flex alignCenter justifyCenter>
          <Text marginBottom={5} fontType="bold">
            {myReview?.length}
          </Text>
          <Text>Đánh giá của tôi</Text>
        </Block>
      </Block>
      <ImagePickerModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        openPicker={openPicker}
        openCamera={openCamera}
      />
    </Block>
  );
};

export default AvatarProfile;
