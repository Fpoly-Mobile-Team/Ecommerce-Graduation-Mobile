import {icons} from '@assets';
import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const AvatarProfile = () => {
  return (
    <Block>
      <Block row marginTop={20} paddingHorizontal={12}>
        <Block width={80} height={80}>
          <Image
            source={{
              uri: 'https://kenh14cdn.com/2020/5/15/10-1589526442308960287468.jpg',
            }}
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
            Cao Thi Thuy Linh
          </Text>
          <Text>kingonwork@gmail.com</Text>
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
