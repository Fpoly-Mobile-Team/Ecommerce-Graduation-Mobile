import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React, {memo} from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {data} from './data';

const CategoryHighlights = () => {
  const navigation = useNavigation();
  const _renderItem = memo(({image, title, discount, params, index}) => {
    return (
      <Block alignCenter width={width / 5}>
        <Pressable onPress={() => navigation.navigate(discount, params)}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.imgicon}
            resizeMode="contain"
          />
        </Pressable>
        <Text
          center
          numberOfLines={2}
          size={12}
          marginHorizontal={12}
          marginBottom={16}
          fontType="bold">
          {title}
        </Text>
      </Block>
    );
  });

  return (
    <Block row wrap alignCenter justifyCenter marginTop={16}>
      {data?.map((item, index) => (
        <_renderItem
          title={item.title}
          key={index}
          image={item.image}
          discount={item?.discount}
          params={item?.params}
        />
      ))}
    </Block>
  );
};

export default CategoryHighlights;
