import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useState} from 'react';
import {Image, Pressable, ScrollView} from 'react-native';

const LeftBox = ({settitle, data}) => {
  const [selected, setSelected] = useState(0);

  const _onPress = (item, index) => {
    setSelected(index);
    settitle(item.title);
  };

  const _renderItem = (item, index) => {
    return (
      <Pressable key={index} onPress={() => _onPress(item, index)}>
        <Block
          row
          width={width * 0.3}
          alignCenter
          backgroundColor={
            index === selected ? theme.colors.white : theme.colors.pinkholder
          }>
          <Block alignCenter justifyCenter>
            <Image
              source={{uri: item.image}}
              style={{
                width: getSize.s(45),
                height: getSize.s(45),
                marginBottom: getSize.m(5),
                marginTop: getSize.m(5),
              }}
              resizeMode="contain"
            />
            <Text
              color={
                index === selected
                  ? theme.colors.black
                  : theme.colors.placeholder
              }
              center
              marginHorizontal={12}
              marginBottom={5}
              numberOfLines={index === selected ? 3 : 2}
              size={index === selected ? 13 : 12}
              fontType={index === selected ? 'semibold' : 'normal'}>
              {item.title}
            </Text>
            <Block
              width={width * 0.3}
              height={1}
              backgroundColor={
                index === selected
                  ? theme.colors.background
                  : theme.colors.smoke
              }
            />
          </Block>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block width={width * 0.3} backgroundColor={theme.colors.pinkholder}>
      <ScrollView
        nestedScrollEnabled={true}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <Block>{data.map(_renderItem)}</Block>
      </ScrollView>
    </Block>
  );
};

export default LeftBox;
