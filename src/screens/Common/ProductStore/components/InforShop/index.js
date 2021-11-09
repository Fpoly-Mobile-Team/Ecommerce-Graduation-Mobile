import {IconLocation, IconMore} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable, Image} from 'react-native';
import styles from './styles';

const InforShop = ({data}) => {
  return (
    <Block row space="between" alignCenter marginVertical={24}>
      <Pressable>
        <Image
          style={styles.iconAvatar}
          source={{
            uri: data?.profilePicture,
          }}
        />
      </Pressable>
      <Block alignStart justifyCenter width={150} flex paddingHorizontal={16}>
        <Text
          flex
          fontType="bold"
          lineHeight={20}
          size={16}
          color={theme.colors.white}>
          {data?.shopName}
        </Text>
        <Block row justifyCenter>
          <Block paddingTop={5}>
            <IconLocation />
          </Block>
          <Text
            size={13}
            numberOfLines={2}
            marginHorizontal={4}
            color={theme.colors.black}>
            {data?.address}
          </Text>
        </Block>
      </Block>
      <Block paddingRight={16} justifyCenter alignCenter>
        <IconMore />
      </Block>
      <Block
        backgroundColor={
          data?.currentStatus === 'Online'
            ? theme.colors.green
            : theme.colors.pink
        }
        radius={4}
        alignCenter
        justifyCenter>
        <Text paddingVertical={6} paddingHorizontal={12}>
          {data?.currentStatus === 'Online' ? (
            <Text fontType="bold" color={theme.colors.white}>
              {data?.currentStatus}
            </Text>
          ) : (
            <Text fontType="bold" color={theme.colors.white}>
              {data?.currentStatus}
            </Text>
          )}
        </Text>
      </Block>
    </Block>
  );
};

export default InforShop;
