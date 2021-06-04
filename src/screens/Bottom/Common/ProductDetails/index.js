import {Block, Text, Header} from '@components';
import React from 'react';

const ProductDetails = () => {
  return (
    <Block flex>
      <Header canGoBack />
      <Text color="red">ProductDetails</Text>
    </Block>
  );
};

export default ProductDetails;
