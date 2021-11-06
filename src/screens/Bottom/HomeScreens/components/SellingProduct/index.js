import {icons} from '@assets';
import {Block, Text} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const SellingProduct = ({titleSelling, data}) => {
  const navigation = useNavigation();
  const _renderItem = (item, index) => (
    <ItemProduct
      key={index}
      style={{...styles.box(index)}}
      images={item.images[0]}
      nameProduct={item.name}
      price={item.price}
      productSold={item.productSold}
      sellOff={item.sellOff}
    />
  );
  const onPress = () => {
    navigation.navigate(routes.LIST_PRODUCTS, {
      tag: '1',
      title: 'Sản Phẩm Bán Chạy',
    });
  };

  return (
    <Block paddingHorizontal={12}>
      <Block
        row
        alignCenter
        marginBottom={16}
        paddingTop={titleSelling ? 10 : 0}
        space="between">
        <Text size={16} fontType="bold">
          {titleSelling ? titleSelling : 'Sản Phẩm Bán Chạy'}
        </Text>
        {titleSelling ? null : (
          <Pressable
            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
            style={styles.stylebtn}
            onPress={onPress}>
            <Text size={12}>Xem tất cả</Text>
            <Image
              source={icons.next}
              style={styles.iconnext}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </Block>
      <Block row wrap alignCenter>
        {data?.map(_renderItem)}
      </Block>
    </Block>
  );
};

export default SellingProduct;
