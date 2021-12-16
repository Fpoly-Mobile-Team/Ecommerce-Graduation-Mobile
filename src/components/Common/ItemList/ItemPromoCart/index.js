import {Block, Button, Text} from '@components';
import {theme} from '@theme';
import moment from 'moment';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const ItemPromoCart = ({title, cod, time, onPress, discount, discountType}) => {
  const _renderItem = () => {
    return (
      <Pressable onPress={onPress}>
        <Block
          row
          alignCenter
          backgroundColor={theme.colors.white}
          radius={10}
          space="between"
          paddingRight={10}
          marginVertical={7}>
          <Block
            style={styles.wrapperType}
            backgroundColor={'#BF190E'}
            width={80}
            height={80}
            alignCenter
            justifyCenter>
            <Block row>
              <Text
                marginTop={10}
                marginRight={10}
                size={26}
                fontType="bold"
                color={theme.colors.white}>
                {discount}
              </Text>
              {discountType === 'Phần trăm' && (
                <Block alignEnd marginTop={-17}>
                  <Text size={18} fontType="bold" color={theme.colors.white}>
                    %
                  </Text>
                  <Text size={18} fontType="bold" color={theme.colors.white}>
                    off
                  </Text>
                </Block>
              )}
            </Block>
          </Block>

          <Block flex paddingHorizontal={5}>
            <Text
              numberOfLines={1}
              size={14}
              fontType="semibold"
              paddingVertical={3}>
              {title}
            </Text>
            <Text size={13}>ID: {cod}</Text>
          </Block>
          <Block paddingTop={0} alignEnd>
            <Text color={theme.colors.lightGray} size={12}>
              {moment(time).format('DD/MM/YYYY')}
            </Text>
            <Button style={styles.btn} title="Chọn" onPress={onPress} />
          </Block>
        </Block>
      </Pressable>
    );
  };
  return <_renderItem />;
};

export default ItemPromoCart;
