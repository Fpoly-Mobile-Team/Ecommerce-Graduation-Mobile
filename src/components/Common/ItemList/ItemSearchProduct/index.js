import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemSearchProduct = ({image, title, _id}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(routes.PRODUCT_DETAILS, {_id})}>
      <Block
        row
        alignCenter
        width={width - 24}
        marginBottom={10}
        space="between">
        <Image source={{uri: image}} style={styles.images} />
        <Block width={'70%'}>
          <Text numberOfLines={1}>{title}</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemSearchProduct;
