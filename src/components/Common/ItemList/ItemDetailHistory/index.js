import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemDetailHistory = ({title, color, price, amount, image, _id}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(routes.PRODUCT_DETAILS, {_id: _id})}>
      <Block
        shadow
        row
        marginBottom={12}
        backgroundColor={theme.colors.white}
        radius={6}>
        <Image source={{uri: image}} style={styles.img} />
        <Block flex padding={16}>
          <Block row space="between">
            <Text
              size={14.4}
              fontType="semibold"
              numberOfLines={2}
              color={theme.colors.black}>
              {title}
            </Text>
          </Block>
          <Block marginTop={12} flexDirection="row">
            <Block>
              <Text fontType="medium" size={12} color={theme.colors.lightGray}>
                Màu sắc:{' '}
                <Text size={12} fontType="bold">
                  {color ? color : 'Không có'}
                </Text>
              </Text>
            </Block>
          </Block>

          <Block flex alignEnd row space="between">
            <Block row>
              <Text size={12} fontType={'bold'}>
                <Text
                  fontType="medium"
                  size={12}
                  color={theme.colors.lightGray}>
                  Số lượng:{' '}
                </Text>
                {amount}
              </Text>
            </Block>
            <Text
              right
              width={'57.5%'}
              color={theme.colors.black}
              fontType="bold">
              {Currency(price)}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemDetailHistory;
