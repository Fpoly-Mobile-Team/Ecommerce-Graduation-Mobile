import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const ItemShop = ({item, index, id}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      key={index}
      onPress={() =>
        navigation.navigate(routes.PRODUCT_STORE, {id: item?.shopInfo._id})
      }>
      <Block
        row
        shadow
        alignCenter
        width={width / 2 - 15}
        paddingVertical={16}
        paddingHorizontal={10}
        marginRight={4}
        radius={5}
        margin={3}
        backgroundColor={theme.colors.white}>
        <Image
          source={{uri: item?.shopInfo?.profilePicture}}
          style={{
            width: getSize.s(50),
            height: getSize.s(50),
            borderRadius: getSize.s(50),
          }}
        />
        <Block marginHorizontal={14}>
          <Block row alignCenter>
            <Text size={12} marginRight={5} fontType="bold">
              {item?.shopInfo?.shopName}
            </Text>
            <Image
              source={icons.tick}
              style={styles.icontick}
              resizeMode="contain"
            />
          </Block>
          <Text fontType="medium" size={10} color={theme.colors.placeholder}>
            {item?.shopInfo?.currentStatus}
          </Text>
          <Block row alignCenter>
            <Rating
              imageSize={getSize.s(8)}
              readonly
              startingValue={item?.shopInfo?.avgRating}
              style={{paddingVertical: getSize.m(5)}}
            />
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemShop;
