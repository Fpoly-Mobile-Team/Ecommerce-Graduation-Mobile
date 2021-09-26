import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, ScrollView} from 'react-native';
import styles from './styles';
const RightBox = ({title}) => {
  const _renderItemImage = index => (
    <Pressable key={index}>
      <Block width={(width * 0.7 - 24.2) / 3} marginTop={10}>
        <Image
          source={{uri: 'https://media3.scdn.vn/images/ecom/category/1580.jpg'}}
          style={styles.styleimg}
          resizeMode="contain"
        />
        <Text center size={12} numberOfLines={3}>
          Tã giấy
        </Text>
      </Block>
    </Pressable>
  );
  const _renderItem = index => {
    return (
      <Block
        key={index}
        radius={5}
        paddingVertical={10}
        paddingHorizontal={6}
        marginVertical={10}
        backgroundColor={theme.colors.white}>
        <Pressable>
          <Block row alignCenter space="between">
            <Text size={13} numberOfLines={2} fontType="semibold">
              Tã, Bỉm
            </Text>
            <Text size={11} color={theme.colors.pink}>
              Xem tất cả
            </Text>
          </Block>
        </Pressable>

        <Block row wrap>
          {[1, 3, 4].map(_renderItemImage)}
        </Block>
      </Block>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Block
        width={width * 0.7}
        paddingTop={10}
        paddingHorizontal={6}
        backgroundColor={theme.colors.background}>
        <Block
          row
          alignCenter
          height={45}
          radius={5}
          paddingHorizontal={12}
          space="between"
          backgroundColor={theme.colors.white}>
          <Text fontType="semibold">{title}</Text>
          <Image
            source={icons.next}
            style={styles.icon_Next}
            resizeMode="contain"
          />
        </Block>
        {[1, 9, 3, 4, 11, 2, 34, 5, 8].map(_renderItem)}
      </Block>
    </ScrollView>
  );
};

export default RightBox;
