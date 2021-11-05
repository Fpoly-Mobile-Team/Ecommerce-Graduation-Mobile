import {IconLocation, IconMore} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable, Image} from 'react-native';
import styles from './styles';

const uri =
  'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/131621153_835496243935495_7699482739742171687_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=UVVSJqLEZkwAX8Uihvr&_nc_ht=scontent.fdad3-4.fna&oh=5caff79316561014d86e4e175b0cdc36&oe=6191B392';
const InforShop = () => {
  return (
    <Block row space="between" alignCenter marginVertical={24}>
      <Pressable>
        <Image
          style={styles.iconAvatar}
          source={{
            uri,
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
          Femi Clothing Store
        </Text>
        <Block row alignCenter justifyCenter>
          <IconLocation />
          <Text
            fontType="light"
            marginHorizontal={4}
            lineHeight={20}
            color="#130000">
            HCM, Vietnam
          </Text>
        </Block>
      </Block>
      <Block paddingRight={16} justifyCenter alignCenter>
        <IconMore />
      </Block>
      <Block
        backgroundColor={theme.colors.pink}
        radius={4}
        alignCenter
        justifyCenter>
        <Text
          color={theme.colors.white}
          paddingVertical={6}
          fontType="bold"
          paddingHorizontal={12}>
          Đã theo dõi
        </Text>
      </Block>
    </Block>
  );
};

export default InforShop;
