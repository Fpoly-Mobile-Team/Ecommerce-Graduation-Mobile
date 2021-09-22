import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
const data = [
  {
    image:
      'https://salt.tikicdn.com/cache/w128/ts/category/85/13/02/d8e5cd75fd88862d0f5f647e054b2205.png',
    title: 'Làm Đẹp & Sức Khoẻ',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/7b/54/d8/fdee971618ba2ef7ae7a313021677c46.png',
    title: 'Thời trang nam',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/48/96/3b/9403c9f9579883b9433decf44e3d4591.png',
    title: 'Thời trang nữ',
  },

  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/f4/e8/0b/aa5b9528cf14bf26d5e2735d171ea50b.png',
    title: 'Túi thời  trang nữ',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/93/27/e3/192b0ebe1d4658c51f9931bda62489b2.png',
    title: 'Điện Thoại & Máy Tính Bảng',
  },
];

const FeaturedCategory = () => {
  const navigation = useNavigation();
  const _renderItem = (item, index) => {
    return (
      <Pressable style={styles.btn} key={index}>
        <Image
          source={{uri: item.image}}
          style={styles.imgcategory}
          resizeMode="contain"
        />
        <Text
          center
          numberOfLines={2}
          size={12}
          marginHorizontal={2}
          fontType="bold">
          {item.title}
        </Text>
      </Pressable>
    );
  };

  const _onPress = () => {
    navigation.navigate(routes.CATEGORYSCREENS);
  };

  return (
    <Block paddingHorizontal={12}>
      <Block row alignCenter marginBottom={16} space="between">
        <Text size={16} fontType="bold">
          Danh Mục Nổi Bật
        </Text>
        <Pressable style={styles.stylebtn} onPress={_onPress}>
          <Text size={12}>Xem tất cả</Text>
          <Image
            source={icons.next}
            style={styles.iconnext}
            resizeMode="contain"
          />
        </Pressable>
      </Block>

      <Block
        row
        wrap
        shadow
        alignCenter
        radius={10}
        marginBottom={10}
        paddingVertical={16}
        backgroundColor="white">
        {data.map(_renderItem)}
      </Block>
    </Block>
  );
};

export default FeaturedCategory;
