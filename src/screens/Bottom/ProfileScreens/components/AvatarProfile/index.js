import {icons} from '@assets';
import {Block, LazyImage, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const AvatarProfile = () => {
  const userInfo = useSelector(state => state.userInfo?.data);

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
          <Pressable>
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
    </Block>
  );
};

export default AvatarProfile;
