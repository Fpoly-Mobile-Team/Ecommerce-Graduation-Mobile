import {IconMessages, IconSearch, IconBack} from '@assets/svg/common';
import {Block} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable, TextInput} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const SearchShop = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Block
      row
      alignCenter
      justifyCenter
      paddingTop={top + 10}
      space="between"
      paddingVertical={12}
      backgroundColor={theme.colors.blueShop}>
      <Pressable onPress={() => navigation.goBack()}>
        <Block>
          <IconBack />
        </Block>
      </Pressable>
      <Block
        flex
        row
        alignCenter
        backgroundColor={theme.colors.smoke}
        paddingHorizontal={12}
        marginHorizontal={16}
        radius={4}>
        <Pressable style={styles.iconSearch}>
          <IconSearch />
        </Pressable>
        <TextInput
          placeholder="Tìm kiếm trong cửa hàng"
          placeholderTextColor={'#8B9399'}
          style={styles.inputStyle}
        />
      </Block>
      <Block>
        <IconMessages />
      </Block>
    </Block>
  );
};

export default SearchShop;
