import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const ItemShop = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      key={index}
      onPress={() => navigation.navigate(routes.PRODUCT_STORE)}>
      <Block
        row
        shadow
        alignCenter
        paddingVertical={16}
        paddingHorizontal={12}
        radius={5}
        margin={3}
        backgroundColor="white">
        <Image
          source={{uri: item.image}}
          style={{
            width: getSize.s(70),
            height: getSize.s(70),
          }}
          resizeMode="contain"
        />
        <Block marginLeft={14}>
          <Block row alignCenter>
            <Text size={16} marginRight={5} fontType="semibold">
              {item.title}
            </Text>
            <Image
              source={icons.tick}
              style={styles.icontick}
              resizeMode="contain"
            />
          </Block>
          <Text fontType="semibold" color={theme.colors.placeholder}>
            546 Product
          </Text>
          <Block row alignCenter>
            <Rating
              imageSize={getSize.s(15)}
              readonly
              startingValue={4}
              style={{paddingVertical: getSize.m(5)}}
            />
            <Text size={12} marginLeft={getSize.m(5)}>
              (25)
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemShop;
