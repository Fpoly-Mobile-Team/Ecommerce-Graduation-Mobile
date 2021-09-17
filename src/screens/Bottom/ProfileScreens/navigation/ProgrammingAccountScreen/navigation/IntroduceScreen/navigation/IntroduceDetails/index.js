import {Block, Text, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {LineHorizontal} from '@assets/svg/common';
import {ScrollView} from 'react-native';

const IntroduceDetail = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header checkBackground canGoBack title="Giới thiệu " />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          radius={5}
          marginVertical={10}
          marginHorizontal={10}
          backgroundColor={theme.colors.white}>
          <Block paddingVertical={30} paddingHorizontal={15}>
            <Text size={20} fontType="bold">
              {data.title}
            </Text>
            <Block alignCenter marginVertical={20}>
              <LineHorizontal />
            </Block>
            <Text size={15}>{data.content}</Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default IntroduceDetail;
