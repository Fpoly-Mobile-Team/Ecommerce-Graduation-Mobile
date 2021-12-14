import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemNotification = ({image, title, content, ingredients, time}) => {
  return (
    <Block row alignCenter paddingVertical={12} paddingHorizontal={12}>
      <Block width={(width - 24) * 0.2} alignCenter>
        <Image
          source={{
            uri: image,
          }}
          style={{...styles.imglogo, position: 'absolute', top: -50}}
          resizeMode="contain"
        />
      </Block>
      <Block width={(width - 24) * 0.8} paddingLeft={12}>
        <Text fontType="bold">{title}</Text>
        <Text>{content}</Text>
        <Block row alignCenter wrap marginTop={10} marginBottom={5}>
          {ingredients?.map(renderImage)}
        </Block>
        <Text size={10} color={theme.colors.placeholder}>
          {time}
        </Text>
      </Block>
    </Block>
  );
};

const renderImage = item => {
  return (
    <Image
      key={item.id}
      source={{
        uri: item.image,
      }}
      style={{
        ...styles.imglogo,
        marginBottom: getSize.m(5),
        marginLeft: getSize.m(3),
      }}
      resizeMode="contain"
    />
  );
};

export default ItemNotification;
