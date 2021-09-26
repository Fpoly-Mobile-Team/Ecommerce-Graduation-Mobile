import React from 'react';
import {Block, Text} from '@components';
import {theme} from '@theme';

const ItemSuggestions = ({title, index}) => {
  return (
    <Block
      paddingHorizontal={10}
      backgroundColor={theme.colors.smoke}
      radius={20}
      paddingVertical={6}
      margin={6}>
      <Text>{title}</Text>
    </Block>
  );
};

export default ItemSuggestions;
