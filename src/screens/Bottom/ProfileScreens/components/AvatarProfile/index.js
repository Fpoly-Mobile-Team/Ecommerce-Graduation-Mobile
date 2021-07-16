import {icons} from '@assets';
import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const index = () => {
  return (
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
  );
};

export default index;
