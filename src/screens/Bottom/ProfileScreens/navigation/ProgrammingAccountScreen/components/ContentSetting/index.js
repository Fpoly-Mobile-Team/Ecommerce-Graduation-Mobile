import {icons} from '@assets';
import {Block, Button, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {Pressable, ScrollView, Image} from 'react-native';
import {DATA} from '../data';
import styles from './styles';

const ContentSetting = () => {
  const navigation = useNavigation();
  const _renderItem = (item, index) => {
    return (
      <Block key={item.id}>
        <Text
          size={12}
          marginVertical={10}
          marginHorizontal={12}
          color={theme.colors.placeholder}>
          {item.label}
        </Text>
        {item?.data.map((items, _) => {
          return (
            <Pressable
              key={items.id}
              onPress={() => navigation.navigate(items.navigation)}>
              <Block
                row
                alignCenter
                marginTop={index === 0 ? 1 : 0}
                marginBottom={1}
                paddingHorizontal={12}
                paddingVertical={10}
                backgroundColor="white"
                space="between">
                <Text>{items.title}</Text>
                <Image
                  source={icons.arrow_right}
                  style={styles.iconArrow}
                  resizeMode="contain"
                />
              </Block>
            </Pressable>
          );
        })}
      </Block>
    );
  };
  return (
    <Block flex>
      <ScrollView>{DATA.map(_renderItem)}</ScrollView>
      <Block paddingHorizontal={12}>
        <Button
          title="ĐĂNG XUẤT"
          backgroundColor={theme.colors.pink}
          height={45}
          style={styles.button}
          shadow
          shadowColor={`${theme.colors.pink}20`}
          elevation={10}
        />
        <Text
          center
          marginBottom={20}
          size={12}
          color={theme.colors.placeholder}>
          Ants v 1.0
        </Text>
      </Block>
    </Block>
  );
};

export default ContentSetting;
