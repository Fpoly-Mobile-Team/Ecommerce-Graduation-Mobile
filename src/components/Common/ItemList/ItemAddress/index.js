import React, {Component} from 'react';
// import {CheckBox} from 'react-native';
import {Block, Text} from '@components';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';
import CheckBox from '@components/CheckBox';


const ItemAddress = ({title, address, defaault}) => {
  return (
    <Block row alignCenter paddingVertical={12}  paddingHorizontal={12}>
      <Block
        shadow
        width={width - 24}
        backgroundColor={theme.colors.white}
        radius={7}
        padding={12}
        >
        <Block paddingBottom={10}>
          <Text fontType="bold" size={16}>
            {title}
          </Text>
        </Block>
        <Block paddingBottom={10}>
          <Text>{address}</Text>
        </Block>
        <Block row paddingBottom={10}>
          <CheckBox />
          <Text>{defaault}</Text>
        </Block>
      </Block>
     

    </Block>
  );
};

export default ItemAddress;
