import {icons} from '@assets';
import {Block, Button, Text} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {FlatList, Image, Platform, Pressable} from 'react-native';
import styles from './styles';

const _renderItem = ({item}) => (
  <ItemProduct
    images={item.images[0]}
    nameProduct={item.name}
    price={item.price}
    productSold={item.productSold}
    sellOff={item.sellOff}
    left={-0.75}
    style={styles.styleitem}
    _id={item._id}
  />
);

const ShopProduct = ({data, productShop, id}) => {
  const navigation = useNavigation();
  const productData = productShop?.filter(v => v._id !== id);

  return (
    <Block marginBottom={10}>
      <Block paddingHorizontal={12}>
        <Block row space="between">
          <Block row>
            <Block
              alignCenter
              justifyCenter
              radius={70}
              width={70}
              height={70}
              borderWidth={0.5}
              borderColor={theme.colors.lightGray}>
              <Image
                source={{
                  uri: data?.profilePicture,
                }}
                style={styles.avatarShop}
              />
            </Block>
            <Block justifyCenter marginLeft={10}>
              <Text fontType="bold">{data?.shopName}</Text>
              <Block row alignCenter>
                <Image
                  source={icons.location}
                  style={styles.iconLocation}
                  resizeMode="contain"
                />
                <Text paddingHorizontal={5} color={theme.colors.lightGray}>
                  {data?.address.toString().split(',')[3]}
                </Text>
              </Block>
            </Block>
          </Block>
          <Button
            onPress={() => navigation.navigate(routes.PRODUCT_STORE)}
            style={styles.btn}
            titleStyle={{color: theme.colors.pink}}
            title="Xem Shop"
          />
        </Block>
        <Block row alignCenter marginTop={10} space="between">
          <Block flex>
            <Block alignCenter justifyCenter>
              <Text size={16} fontType="semibold" color={theme.colors.pink}>
                {productShop?.length}
              </Text>
              <Text marginTop={5} color={theme.colors.lightGray}>
                Sản phẩm
              </Text>
            </Block>
          </Block>
          <Block
            width={1}
            height="100%"
            backgroundColor={theme.colors.lightGray}
          />
          <Block flex>
            <Block alignCenter justifyCenter>
              <Text size={16} fontType="semibold" color={theme.colors.pink}>
                1,2k
              </Text>
              <Text marginTop={5} color={theme.colors.lightGray}>
                Đánh giá
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block height={10} marginTop={10} backgroundColor={theme.colors.smoke} />

      <Block paddingHorizontal={12} paddingTop={10}>
        <Block row alignCenter space="between">
          <Text size={16} fontType="bold">
            Các sản phẩm khác của shop
          </Text>
          <Pressable onPress={() => navigation.navigate(routes.PRODUCT_STORE)}>
            <Block row alignCenter>
              <Text color={theme.colors.pink}>Xem tất cả</Text>
              <Image
                source={icons.next}
                style={styles.iconnext}
                resizeMode="contain"
              />
            </Block>
          </Pressable>
        </Block>
        <Block marginTop={10}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={productData}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={30}
            initialNumToRender={6}
            disableVirtualization={false}
            windowSize={5}
            removeClippedSubviews={Platform.OS === 'ios' ? true : false}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item._id.toString()}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default ShopProduct;
