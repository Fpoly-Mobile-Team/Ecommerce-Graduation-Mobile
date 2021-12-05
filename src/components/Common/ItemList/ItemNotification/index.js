import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const ItemNotification = ({index, title, content, images, time, onPress}) => {
  const promotion = 'https://i.imgur.com/SfUNX8R.png';

  return (
    <Pressable onPress={onPress}>
      <Block row paddingVertical={12} paddingHorizontal={12} alignCenter>
        <Block
          key={index}
          width={32}
          height={32}
          alignCenter
          justifyCenter
          backgroundColor={theme.colors.orange}
          radius={40}
          marginTop={-60}>
          <Image
            source={{
              uri: promotion,
            }}
            style={{...styles.imgPromotion}}
            resizeMode="contain"
          />
        </Block>
        <Block width={width - 64} marginLeft={12}>
          <Text fontType="bold" marginBottom={1}>
            {title}
          </Text>
          <Text size={13} justify>{content}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Block row alignCenter wrap marginVertical={6}>
              {images?.map(renderImage)}
            </Block>
          </ScrollView>
          <Text fontType="medium" size={11} color={theme.colors.lightGray}>
            {time}
          </Text>
        </Block>
      </Block>
      <Block borderColor={theme.colors.lightRount} borderWidth={1 / 2}></Block>
    </Pressable>
  );
};

const renderImage = (item, index) => {
  return (
    <Block
      key={index}
      width={48}
      height={48}
      backgroundColor={'#F3F3F3'}
      alignCenter
      justifyCenter
      radius={6}
      marginLeft={index === 0 ? 0 : 12}>
      <Image
        key={item.id}
        source={{
          uri: item,
        }}
        style={{
          ...styles.imgImages,
        }}
      />
    </Block>
  );
};

export default ItemNotification;
