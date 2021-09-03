import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';

const ItemAddress = ({title, address, phone, index, ic_default}) => {
  return (
    <Block
      row
      alignCenter
      paddingHorizontal={12}
      marginBottom={10}
      marginTop={index === 0 ? 10 : 0}>
      <Block
        shadow
        width={width - 24}
        backgroundColor={theme.colors.white}
        radius={7}
        padding={12}>
        <Block>
          {ic_default === '1' && (
            <Block row alignCenter space="between">
              <Text marginBottom={5} size={12} color={theme.colors.red}>
                [Mặc định]
              </Text>
              <Image
                source={icons.flag}
                style={{
                  width: 18,
                  height: 18,
                  tintColor: 'red',
                }}
                resizeMode="contain"
              />
            </Block>
          )}
          <Text marginBottom={5} fontType="bold" size={16}>
            {title}
          </Text>
        </Block>
        <Text marginBottom={5}>{phone}</Text>
        <Text>{address}</Text>
      </Block>
    </Block>
  );
};

export default ItemAddress;
