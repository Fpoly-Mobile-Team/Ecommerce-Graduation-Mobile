import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import {width} from '@utils/responsive';
import Storage from '@utils/storage';
import React, {useEffect} from 'react';
import {Alert, Image, Pressable} from 'react-native';
import styles from './styles';

const ItemProductCart = ({
  data,
  isCheck,
  items,
  dataselected,
  indexSlice,
  nameShop,
  id,
  setDataCart,
}) => {
  const navigation = useNavigation();
  const [selectedProducts, setSelectedProducts] = dataselected;
  const priceAll = () => {
    let sum = 0;
    data?.forEach(p => {
      sum += p.price * p.quantity * (1 - p.product.sellOff);
    });
    return sum;
  };
  useEffect(() => {
    console.log(selectedProducts);
  }, [selectedProducts]);
  const _onSelectingAllProducts = () => {
    if (selectedProducts.length !== data.length ? true : false) {
      setSelectedProducts(data);
    } else {
      setSelectedProducts([]);
    }
  };

  const _onSelectProduct = item => {
    if (
      selectedProducts.some(
        p => p.product._id === item.product._id && p.color === item.color,
      )
    ) {
      setSelectedProducts(
        selectedProducts.filter(
          p => p.product._id !== item.product._id || p.color !== item.color,
        ),
      );
    } else {
      setSelectedProducts([...selectedProducts, item]);
    }
  };

  const CheckBox = ({width, isCheck, onPress}) => {
    const onCheckBoxPress = () => {
      onPress();
    };

    return (
      <Pressable onPress={onCheckBoxPress}>
        <Block row alignCenter marginRight={5}>
          <Block
            alignCenter
            justifyCenter
            radius={5}
            height={width}
            width={width}
            backgroundColor={isCheck ? 'green' : 'white'}
            borderWidth={1}
            borderColor="black">
            <Image style={styles.icon(width)} source={icons.check_blank} />
          </Block>
        </Block>
      </Pressable>
    );
  };
  const onPressAddQuantity = (type, quantity, idProduct, color) => {
    if (type === '-') {
      if (quantity === 1) {
        Alert.alert('Thông Báo', 'Bạn có chắc chắn xoá sản phẩm này không ?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              Storage.getItem('CART').then(value => {
                for (let index = 0; index < value.length; index++) {
                  let element = value[index];
                  if (element.nameShop === nameShop) {
                    element = {
                      ...element,
                      productArray: element.productArray.filter(
                        v => v.product._id !== idProduct || v.color !== color,
                      ),
                    };
                    let elements = value;
                    elements[index] = element;
                    Storage.setItem('CART', elements);
                    setTimeout(() => {
                      if (element.productArray.length === 0) {
                        Storage.setItem(
                          'CART',
                          value.filter(v => v.nameShop !== nameShop),
                        );
                        setDataCart(value.filter(v => v.nameShop !== nameShop));
                      }
                    }, 100);
                    setDataCart(elements);
                    // setSelectedProducts(data);
                  }
                }
              });
            },
          },
        ]);
      } else {
        Storage.getItem('CART').then(value => {
          for (let index = 0; index < value.length; index++) {
            let element = value[index];
            if (element.nameShop === nameShop) {
              element = {
                ...element,
                productArray: element.productArray.map((p, index) => {
                  if (p.product._id === idProduct && p.color === color) {
                    return {
                      ...p,
                      quantity: p.quantity - 1,
                    };
                  }
                  return p;
                }),
              };
              let elements = value;
              elements[index] = element;
              Storage.setItem('CART', elements);
              setDataCart(elements);
              // setSelectedProducts(data);
            }
          }
        });
      }
    } else {
      Storage.getItem('CART').then(value => {
        for (let index = 0; index < value.length; index++) {
          let element = value[index];
          if (element.nameShop === nameShop) {
            element = {
              ...element,
              productArray: element.productArray.map((p, index) => {
                if (p.product._id === idProduct && p.color === color) {
                  return {
                    ...p,
                    quantity: p.quantity + 1,
                  };
                }
                return p;
              }),
            };
            let elements = value;
            elements[index] = element;
            Storage.setItem('CART', elements);
            setDataCart(elements);
            // setSelectedProducts(data);
          }
        }
      });
    }
  };
  const _renderItem = (item, index) => {
    const pricePromo =
      item.product?.sellOff === 0
        ? item.product.price
        : item.product?.price * (1 - item.product?.sellOff);
    return (
      <Pressable
        key={index}
        onPress={() =>
          navigation.navigate(routes.PRODUCT_DETAILS, {_id: item.product._id})
        }>
        <Block row paddingHorizontal={16} marginBottom={16} space="between">
          <Block row width="36%">
            <CheckBox
              isCheck={selectedProducts.some(
                p =>
                  p.product._id === item.product._id && p.color === item.color,
              )}
              width={20}
              onPress={() => _onSelectProduct(item)}
            />

            <Image
              source={{uri: item?.product?.images[0]}}
              style={styles.img}
            />
          </Block>
          <Block width="64%">
            <Block row space="between">
              <Block row space="between">
                <Block>
                  <Text numberOfLines={2} marginBottom={5}>
                    {item.product?.name}
                  </Text>
                  {item?.color ? (
                    <Block row alignCenter marginBottom={5}>
                      <Text size={12} color="gray">
                        Color:{' '}
                        <Text size={12} fontType="bold">
                          {item.color}
                        </Text>
                      </Text>
                    </Block>
                  ) : null}

                  <Block row alignCenter>
                    {pricePromo !== item.product.price ? (
                      <Text
                        marginHorizontal={6}
                        size={13}
                        color={theme.colors.lightGray}
                        style={styles.txtunderprice}>
                        {Currency(item.product.price)}
                      </Text>
                    ) : null}

                    <Text size={15} fontType="bold" color={theme.colors.pink}>
                      {Currency(pricePromo)}
                    </Text>
                  </Block>

                  <Block row alignCenter marginTop={5}>
                    <_renderButton
                      title="-"
                      onPress={() =>
                        onPressAddQuantity(
                          '-',
                          item.quantity,
                          item.product?._id,
                          item.color,
                        )
                      }
                    />
                    <Text marginHorizontal={20} color={theme.colors.black}>
                      {item.quantity}
                    </Text>
                    <_renderButton
                      title="+"
                      onPress={() =>
                        onPressAddQuantity(
                          '+',
                          item.quantity,
                          item.product?._id,
                          item.color,
                        )
                      }
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Pressable>
    );
  };
  const onCheck = () => {
    for (const element of selectedProducts) {
      for (const elements of data) {
        if (element.product.shopId === elements.product.shopId) {
          return true;
        }
      }
    }
    return false;
  };

  const _renderItemCard = () => {
    return (
      <Block marginTop={10} marginBottom={isCheck ? 10 : 0}>
        <Block
          style={styles.box_frist}
          row
          alignCenter
          padding={16}
          marginBottom={2}
          backgroundColor={theme.colors.white}>
          <CheckBox
            isCheck={
              onCheck() && selectedProducts?.length === data?.length
                ? true
                : false
            }
            width={20}
            onPress={_onSelectingAllProducts}
          />
          <Text marginLeft={5}>{nameShop}</Text>
        </Block>
        <Block
          style={styles.box_end}
          width={width - 24}
          paddingVertical={16}
          backgroundColor={theme.colors.white}>
          {data?.map(_renderItem)}
          <Block alignEnd marginTop={10}>
            <Text
              marginRight={16}
              fontType="bold"
              color={theme.colors.lightGray}>
              Tổng cộng:{' '}
              <Text size={16} fontType="bold" color={theme.colors.pink}>
                {Currency(priceAll())}
              </Text>
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <Block paddingHorizontal={12}>
      <_renderItemCard />
    </Block>
  );
};

export default ItemProductCart;

const _renderButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Block
        alignCenter
        justifyCenter
        width={25}
        radius={5}
        height={25}
        borderWidth={0.5}
        borderColor={theme.colors.lightGray}>
        <Text fontType="bold" color={theme.colors.lightGray}>
          {title}
        </Text>
      </Block>
    </Pressable>
  );
};
