import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemSearchProduct = ({image, title}) => {
  return (
    <Block row alignCenter width={width - 24} marginBottom={10} space="between">
      <Image source={{uri: image}} style={styles.images} />
      <Block width={'70%'}>
        <Text numberOfLines={1}>{title}</Text>
      </Block>
    </Block>
  );
};

export default ItemSearchProduct;
