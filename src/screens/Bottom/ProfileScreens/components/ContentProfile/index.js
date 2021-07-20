import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {DATA, DATABILL} from '../data';
import styles from './styles';

const ContentProfile = () => {
  return (
    <Block wrap marginTop={10}>
      {DATA.map(ActionsButton)}
    </Block>
  );
};

const ActionsButton = (item, index) => (
  <Block key={item.id}>
    <Block
      row
      alignCenter
      paddingHorizontal={12}
      paddingVertical={12}
      space="between">
      <Block row alignCenter>
        {item.id !== '1' && (
          <Image source={item.image} style={styles.icon} resizeMode="contain" />
        )}
        <Text fontType={item.id === '1' ? 'bold' : 'regular'}>
          {item.title}
        </Text>
      </Block>
      {item.id === '1' ? (
        <Pressable>
          <Text color={theme.colors.pink} fontType="semibold">
            XEM LỊCH SỬ
          </Text>
        </Pressable>
      ) : (
        <Pressable>
          <Image
            source={icons.arrow_right}
            style={styles.iconArrow}
            resizeMode="contain"
          />
        </Pressable>
      )}
    </Block>
    {item.id === '1' && (
      <Block row alignCenter wrap>
        {DATABILL.map(_renderItem)}
      </Block>
    )}
    <Block height={8} width={width} backgroundColor={theme.colors.smoke} />
  </Block>
);

const _renderItem = item => (
  <Pressable key={item.id}>
    <Block flex alignCenter width={width / 4}>
      <Block
        alignCenter
        justifyCenter
        width={50}
        height={50}
        radius={50}
        marginBottom={10}
        backgroundColor={`${theme.colors.pink}20`}>
        <Image
          source={item.image}
          style={styles.iconBill}
          resizeMode="contain"
        />
      </Block>

      <Text center marginBottom={10} marginHorizontal={12} size={12}>
        {item.title}
      </Text>
    </Block>
  </Pressable>
);

export default ContentProfile;
