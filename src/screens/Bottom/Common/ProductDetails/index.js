import {Block, Text, Header} from '@components';
import React from 'react';
import {View} from 'react-native';

const ProductDetails = () => {
  return (
    <Block flex>
      <Header canGoBack />
      <Text color="red">ProductDetails</Text>
    </Block>
  );
};

export default ProductDetails;
