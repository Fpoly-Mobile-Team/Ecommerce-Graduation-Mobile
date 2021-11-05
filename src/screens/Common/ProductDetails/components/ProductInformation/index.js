import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';

const ProductInformation = () => {
  return (
    <Block paddingHorizontal={12} marginTop={10}>
      <Block row alignCenter>
        <Image
          source={icons.info}
          style={{
            width: getSize.s(20),
            height: getSize.s(20),
            tintColor: theme.colors.black,
          }}
          resizeMode="contain"
        />
        <Text marginLeft={5} size={16} fontType="bold">
          Thông Tin Sản Phẩm
        </Text>
      </Block>
    </Block>
  );
};

export default ProductInformation;
