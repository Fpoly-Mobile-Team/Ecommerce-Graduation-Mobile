import {icons} from '@assets';
import {Block, LazyImage, Text} from '@components';
import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useImagePicker} from '@hooks';
import styles from './styles';
import {ModalBox} from '@components';
import {CameraIcon, ImageIcon} from '@assets/svg/common';
import {theme} from '@theme';

const AvatarProfile = () => {
  const userInfo = useSelector(state => state.userInfo?.data);
  const picker = useImagePicker();
  const [isVisible, setIsVisible] = useState(false);

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
          <Pressable onPress={() => setIsVisible(isVisible)}>
            <Image
              source={icons.camera}
              style={styles.iconCamera}
              resizeMode="contain"
            />
          </Pressable>
        </Block>
        <Block marginLeft={10}>
          <Text marginTop={10} size={16} fontType="semibold">
            {userInfo?.username}
          </Text>
          <Text>{userInfo?.email}</Text>
        </Block>
      </Block>
      <Block flex row marginTop={10}>
        <Block flex alignCenter justifyCenter>
          <Text marginBottom={5} fontType="bold">
            4
          </Text>
          <Text>Xem gần đây</Text>
        </Block>
        <Block flex alignCenter justifyCenter>
          <Text marginBottom={5} fontType="bold">
            4
          </Text>
          <Text>Đánh giá của tôi</Text>
        </Block>
      </Block>
      <ModalBox
        isVisible
        containerStyle={styles.modalContainer}
        children={
          <Block
            alignCenter
            justifyCenter
            row
            marginHorizontal={20}
            paddingBottom={25}
            space="around">
            <Pressable onPress={picker.openCamera}>
              <Block alignCenter>
                <Block
                  backgroundColor={theme.colors.primaryColor}
                  padding={15}
                  radius={50}>
                  <CameraIcon />
                </Block>
                <Text paddingTop={5}>Máy ảnh</Text>
              </Block>
            </Pressable>

            <Pressable onPress={picker.openMultiPicker}>
              <Block alignCenter>
                <Block
                  backgroundColor={theme.colors.primaryColor}
                  padding={15}
                  radius={50}>
                  <ImageIcon />
                </Block>
                <Text paddingTop={5}>Thư viện</Text>
              </Block>
            </Pressable>
          </Block>
        }
      />
    </Block>
  );
};

export default AvatarProfile;
