import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import {width} from '@utils/responsive';
import React, {useState, useRef} from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemProductCart = ({
  data,
  isCheck,
  items,
  dataselected,
  indexSlice,
  nameShop,
  id,
}) => {
  const navigation = useNavigation();
  const [valueall, setValueAll] = useState(false);
  const [datatotalPrice, setDataTotalPrice] = dataselected;
  const [valueitem, setValueItem] = useState(false);
  const chkboxRef = useRef();
  const chkboxAllRef = useRef();
  const [array, setArray] = useState([]);
  const priceAll = () => {
    let sum = 0;
    data.forEach(p => {
      sum += p.price * p.quantity * (1 - p.product.sellOff);
    });
    return sum;
  };
  // console.log('data', data);
  const _onPress = value => {};

  const _renderItem = (item, index) => {
    const pricePromo =
      item.product?.sellOff === 0
        ? item.product.price
        : item.product?.price * (1 - item.product?.sellOff);
    console.log('array', array);
    return (
      <Pressable
        key={index}
        onPress={() =>
          navigation.navigate(routes.PRODUCT_DETAILS, {_id: item.product._id})
        }>
        <Block row paddingHorizontal={16} marginBottom={16} space="between">
          <Block row width="36%">
            <CheckBox
              // ref={chkboxRef}
              width={20}
              value={array.some(v => v.product._id === item.product._id)}
              onPress={() => {
                if (array.some(v => v.product._id === item.product._id)) {
                  const arr = array.filter(v => {
                    console.log(v, item);
                    if (
                      v.product._id === item.product._id &&
                      v.color !== item.color
                    ) {
                      return false;
                    } else {
                      return true;
                    }
                  });
                  setArray(arr);
                } else {
                  // console.log(array);
                  // array.product.push(item);
                  array.push(item);
                  console.log(array);
                  setArray(array);
                }
              }}
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
                    <_renderButton title="-" />
                    <Text marginHorizontal={20} color={theme.colors.black}>
                      {item.quantity}
                    </Text>
                    <_renderButton title="+" />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Pressable>
    );
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
            // ref={chkboxAllRef}
            width={20}
            value={
              array?.length > 0 && array?.length === data?.length ? true : false
            }
            // value={valueall}
            // setValue={setValueAll}
            onPress={() => {
              if (array?.length > 0) {
                setArray([]);
              } else {
                setArray(data);
              }

              // console.log(chkboxRef.current);
            }}
          />
          <Text>{nameShop}</Text>
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

const CheckBox = ({ref, width, value, onPress}) => {
  const [isCheck, setIsCheck] = useState(value);

  const onCheckBoxPress = () => {
    setIsCheck(v => !v);
    onPress();
  };

  return (
    <Pressable ref={ref} onPress={onCheckBoxPress}>
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
