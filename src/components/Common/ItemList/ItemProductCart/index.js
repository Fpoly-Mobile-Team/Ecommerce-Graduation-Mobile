import {Block, CheckBox, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemProductCart = ({
  data,
  isCheck,
  items,
  dataselected,
  indexSlice,
  id,
}) => {
  const navigation = useNavigation();
  const [valueall, setValueAll] = useState(false);
  const [datatotalPrice, setDataTotalPrice] = dataselected;
  const findChecked = (a, b) => {
    if (a?.length !== b?.length) {
      return false;
    } else {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
  };

  const [valueitem, setValueItem] = useState(false);

  const priceAll = data
    ? data.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.amount,
        0,
      )
    : '0';

  const _onPress = value => {
    const arr = [];
    if (!valueall) {
      if (datatotalPrice.length === 0) {
        arr.push(items);
        setDataTotalPrice(arr);
      } else {
        datatotalPrice.push(items);
        setDataTotalPrice(datatotalPrice);
      }
    } else {
      const datatotalPrices = datatotalPrice.filter(item => item.id !== value);
      setDataTotalPrice(datatotalPrices);
    }
  };

  console.log(findChecked(data, datatotalPrice[indexSlice]?.productArray));
  console.log(
    '====================================',
    datatotalPrice[indexSlice]?.productArray,
  );

  const _renderItem = (item, index) => {
    return (
      <Pressable
        key={index}
        onPress={() => navigation.navigate(routes.PRODUCT_DETAILS)}>
        <Block row paddingHorizontal={16} marginBottom={16} space="between">
          <Block row width="36%">
            <CheckBox
              width={20}
              setValue={setValueItem}
              value={findChecked(
                data,
                datatotalPrice[indexSlice]?.productArray,
              )}
            />
            <Image source={{uri: item.img}} style={styles.img} />
          </Block>
          <Block width="64%">
            <Block row space="between">
              <Block row space="between">
                <Block>
                  <Text numberOfLines={2} marginBottom={5}>
                    {item.title}
                  </Text>
                  <Block row alignCenter marginBottom={5}>
                    <Text size={12} color="gray">
                      Color:{' '}
                      <Text size={12} fontType="bold">
                        {item.color}
                      </Text>
                    </Text>
                    <Text marginLeft={10} size={12} color="gray">
                      Size:{' '}
                      <Text size={12} fontType="bold">
                        {item.size}
                      </Text>
                    </Text>
                  </Block>
                  <Block row alignCenter>
                    <Text
                      marginHorizontal={6}
                      size={13}
                      color={theme.colors.lightGray}
                      style={styles.txtunderprice}>
                      {Currency(item.price)}
                    </Text>
                    <Text size={15} fontType="bold" color={theme.colors.pink}>
                      {Currency(item.price)}
                    </Text>
                  </Block>

                  <Block row alignCenter marginTop={5}>
                    <_renderButton title="-" />
                    <Text marginHorizontal={20} color={theme.colors.black}>
                      {item.amount}
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
            title={data[0]?.nameshop}
            width={20}
            value={valueall}
            setValue={setValueAll}
            onPress={() => _onPress(id)}
          />
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
                {Currency(priceAll)}
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
