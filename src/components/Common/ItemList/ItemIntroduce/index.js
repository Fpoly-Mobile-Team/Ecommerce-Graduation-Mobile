import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ChevronRight} from '@assets/svg/common';

const ItemIntroduce = ({title, content}) => {
  return (
    <Block flex marginTop={-5}>
      <Block
        row
        space="between"
        borderRadius={10}
        paddingVertical={10}
        marginBottom={10}
        backgroundColor={theme.colors.white}>
        <Block paddingLeft={20}>
          <Text size={17} fontType="bold">
            {title}
          </Text>
          <Text marginTop={10}>{content.slice(0, 45)}...</Text>
        </Block>
        <Block marginTop={10} marginRight={10} alignCenter>
          <ChevronRight />
        </Block>
      </Block>
    </Block>
  );
};

export default ItemIntroduce;
