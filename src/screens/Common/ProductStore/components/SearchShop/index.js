import {IconBack, IconMessages, IconSearch} from '@assets/svg/common';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useSelector} from 'react-redux';
import styles from './styles';

const SearchShop = ({idShop}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const config = useSelector(state => state.config?.data);

  return (
    <Block
      row
      alignCenter
      justifyCenter
      paddingTop={top + 10}
      space="between"
      paddingVertical={12}
      backgroundColor={config?.backgroundcolor}>
      <Pressable onPress={() => navigation.goBack()}>
        <Block>
          <IconBack />
        </Block>
      </Pressable>
      <Block
        flex
        row
        alignCenter
        backgroundColor={theme.colors.white + 10}
        paddingHorizontal={12}
        marginHorizontal={16}
        radius={4}>
        <Pressable style={styles.iconSearch}>
          <IconSearch />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate(routes.SEARCH_PRODUCT_SHOP, {id: idShop})
          }
          style={styles.inputStyle}>
          <Text color={theme.colors.white}>Tìm kiếm trong cửa hàng</Text>
        </Pressable>
      </Block>

      <Block>
        <Pressable onPress={() => navigation.navigate(routes.CHATBOX)}>
          <IconMessages />
        </Pressable>
      </Block>
    </Block>
  );
};

export default SearchShop;
