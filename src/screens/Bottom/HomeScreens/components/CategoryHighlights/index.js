import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React, {memo} from 'react';
import {Image} from 'react-native';
import styles from './styles';
const data = [
  {
    image: 'https://media3.scdn.vn/img4/2021/05_24/aexwbElKIc9dVls08k30.png',
    title: 'Giờ vàng săn sale',
  },
  {
    image:
      'https://salt.tikicdn.com/ts/upload/8c/0b/c9/55173090606c99d5f348a2f47d7b8faa.png',
    title: 'Giảm 30%',
  },
  {
    image: 'https://cf.shopee.vn/file/c360d75f1605e54f07c2b30100755722_xxhdpi',
    title: 'Giảm 50%',
  },
  {
    image: 'https://cf.shopee.vn/file/6a574d8298eed44c1062a5f1408e4c2b_xxhdpi',
    title: 'Freeship Xtra',
  },
  {
    image:
      'https://salt.tikicdn.com/ts/upload/ce/ee/fe/a8a350727b38a1e20ce1610c5162fcb7.png',
    title: 'Giao hàng 2h',
  },
];

const CategoryHighlights = () => {
  const _renderItem = memo(({image, title, index}) => {
    return (
      <Block alignCenter width={width / 5}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imgicon}
          resizeMode="contain"
        />
        <Text
          center
          numberOfLines={2}
          size={12}
          marginHorizontal={12}
          marginBottom={16}
          fontType="semibold">
          {title}
        </Text>
      </Block>
    );
  });

  return (
    <Block row wrap alignCenter justifyCenter marginTop={16}>
      {data.map((item, index) => (
        <_renderItem title={item.title} key={index} image={item.image} />
      ))}
    </Block>
  );
};

export default CategoryHighlights;
