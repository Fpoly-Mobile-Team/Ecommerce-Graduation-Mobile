import {IconLocation, IconMore} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable, Image} from 'react-native';
import styles from './styles';

const InforShop = () => {
  return (
    <Block row space="between" alignCenter marginVertical={24}>
      <Pressable>
        <Image
          style={styles.iconAvatar}
          source={{
            uri: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/238436993_1517607961914642_1112862778912670549_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jCOT2apc68QAX-g0BrO&tn=CU0A5yL8bDui7MH4&_nc_ht=scontent.fvca1-2.fna&oh=dbee2b9069656c6e67b62374dc6e7e1b&oe=616A3DFA',
          }}
        />
      </Pressable>
      <Block alignStart justifyCenter width={150} flex paddingHorizontal={16}>
        <Text lineHeight={20} size={16} color={theme.colors.white}>
          Femi Clothing Store
        </Text>
        <Block row alignCenter justifyCenter>
          <IconLocation />
          <Text marginHorizontal={4} lineHeight={20} color={'#8B9399'}>
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
          paddingHorizontal={12}>
          Đã theo dõi
        </Text>
      </Block>
    </Block>
  );
};

export default InforShop;
