import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {DATA} from '../data';

const ContentProfile = () => {
  return (
    <Block wrap marginTop={20}>
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
          <Image
            source={item.image}
            style={{width: 24, height: 24, marginRight: 10}}
            resizeMode="contain"
          />
        )}

        <Text>{item.title}</Text>
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
            style={{width: 14, height: 14, tintColor: theme.colors.gray}}
            resizeMode="contain"
          />
        </Pressable>
      )}
    </Block>

    <Block height={5} width={width} backgroundColor={theme.colors.smoke} />
  </Block>
);

export default ContentProfile;
