import {icons} from '@assets';
import {Block, Button, ModalBox, Text} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {Currency} from '@utils/helper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import Storage from '@utils/storage';

const ModalChooseType = ({
  isVisible,
  setIsVisible,
  image,
  productStock,
  price,
  options,
  title,
  item,
  nameShop,
}) => {
  const [option, setOption] = useState({color: ''});
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();

  const _onPressAddCart = type => {
    if (options?.length) {
      if (option?._id) {
        if (type) {
          setQuantity(value => value + 1);
        } else {
          if (quantity !== 1) {
            setQuantity(value => value - 1);
          }
        }
      }
    } else {
      if (type) {
        setQuantity(value => value + 1);
      } else {
        if (quantity !== 1) {
          setQuantity(value => value - 1);
        }
      }
    }
  };

  const onPressBuy = () => {
    if (title === 'MUA HÀNG') {
      const data = [
        {
          product: item,
          quantity,
          option: option.color || '',
          price: item.price,
        },
      ];
      navigation.navigate(routes.PAYMENTSCREEN, {data, type: 'BUY'});
      setIsVisible(false);
    } else {
      const data = {
        _id: item?.shopId,
        nameShop: nameShop,
        productArray: [
          {
            product: item,
            quantity,
            color: option.color || '',
            price: item.price,
          },
        ],
      };
      Storage.getItem('CART').then(value => {
        if (value) {
          let shopIds = value.map(productGroup => productGroup._id);
          if (shopIds.includes(item.shopId)) {
            let groupIndex = shopIds.indexOf(item.shopId);
            let newProductGroups = value.map((productGroup, index) => {
              if (groupIndex === index) {
                let productIds = productGroup.productArray.map(p => {
                  return `${p.product._id}${p.color}`;
                });
                if (productIds.includes(`${item._id}${option.color}`)) {
                  return {
                    ...productGroup,
                    productArray: productGroup.productArray.map((p, index) => {
                      if (
                        p.product._id === item._id &&
                        p.color === option.color
                      ) {
                        return {
                          ...p,
                          quantity: p.quantity + quantity,
                          price: p.price,
                        };
                      }
                      return p;
                    }),
                  };
                } else {
                  let newArray = productGroup.productArray;
                  newArray.push({
                    quantity: quantity,
                    color: option.color || '',
                    price: item.price,
                    product: item,
                  });
                  return {
                    ...productGroup,
                    productArray: newArray,
                  };
                }
              }
              return productGroup;
            });
            Storage.setItem('CART', newProductGroups);
          } else {
            Storage.setItem('CART', [...value, data]);
          }
        } else {
          Storage.setItem('CART', [data]);
          console.log('data2:', data);
        }
      });

      setIsVisible(false);
    }
  };

  const _renderButton = ({title, onPress}) => {
    return (
      <Pressable onPress={onPress}>
        <Block
          alignCenter
          justifyCenter
          width={30}
          radius={5}
          height={30}
          borderWidth={0.5}
          borderColor={theme.colors.lightGray}>
          <Text size={16} fontType="bold" color={theme.colors.lightGray}>
            {title}
          </Text>
        </Block>
      </Pressable>
    );
  };
  const _renderItem = item => {
    const _onPress = () => {
      setOption(item);
    };
    return (
      <Pressable key={item._id} onPress={_onPress}>
        <Block
          row
          radius={2}
          alignCenter
          marginLeft={5}
          paddingHorizontal={12}
          height={40}
          borderWidth={1}
          borderColor={item._id === option?._id ? 'pink' : 'white'}
          backgroundColor={
            item._id === option?._id ? theme.colors.white : theme.colors.smoke
          }>
          <Image
            source={{uri: item.image}}
            style={{
              width: getSize.s(30),
              height: getSize.s(30),
              borderRadius: getSize.s(2),
            }}
          />
          <Text marginLeft={10}>{item.color}</Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <ModalBox
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      onBackdropPress={() => {
        setIsVisible(false);
        setQuantity(1);
      }}>
      <Block backgroundColor="white" height={'45%'} padding={20} radius={5}>
        <Block row space="between">
          <Block row>
            <Image
              source={{uri: option?.image ? option?.image : image}}
              style={{
                width: getSize.s(width - 40) / 3,
                height: getSize.s(80),
              }}
            />
            <Block style={styles.block}>
              <Block marginLeft={5} style={styles.text}>
                <Text
                  color={theme.colors.pink}
                  fontType="medium"
                  size={17}
                  style={styles.text}>
                  {Currency(price)}
                </Text>
                <Text marginTop={5} color={theme.colors.placeholder}>
                  Kho: {productStock}
                </Text>
              </Block>
            </Block>
          </Block>
          <Pressable
            onPress={() => {
              setIsVisible(false);
              setQuantity(1);
            }}>
            <Image
              source={icons.close}
              style={{
                width: getSize.s(14),
                height: getSize.s(14),
              }}
            />
          </Pressable>
        </Block>
        <Block marginTop={20}>
          {options?.length ? (
            <>
              <Text marginBottom={10}>Màu</Text>
              <Block wrap row alignCenter>
                {options?.map(_renderItem)}
              </Block>
            </>
          ) : null}
          <Block marginTop={20} row alignCenter space="between">
            <Text>Số lượng</Text>
            <Block row alignCenter>
              <_renderButton title="-" onPress={() => _onPressAddCart(false)} />
              <Text marginHorizontal={10} color={theme.colors.pink}>
                {quantity}
              </Text>
              <_renderButton
                title="+"
                onPress={() => {
                  _onPressAddCart(true);
                }}
              />
            </Block>
          </Block>
        </Block>
        {options?.length ? (
          <Button
            title={title}
            height={45}
            style={styles.button(option)}
            titleStyle={{
              color: option?._id ? theme.colors.white : theme.colors.lightGray,
            }}
            onPress={onPressBuy}
          />
        ) : (
          <View>
            <Button
              title={title}
              height={45}
              style={styles.buttonAdd}
              onPress={() => onPressBuy()}
            />
          </View>
        )}
      </Block>
    </ModalBox>
  );
};

export default ModalChooseType;
