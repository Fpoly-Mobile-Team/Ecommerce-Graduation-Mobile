/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {height, width} from '@utils/responsive';
import React from 'react';
import {Image, FlatList, Pressable, Platform} from 'react-native';
import styles from './styles';
const ListCategoryFiller = ({data}) => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        key={index}
        onPress={() =>
          navigation.navigate(routes.LIST_PRODUCTS, {
            idCate: item._id,
            nameCate: item.name,
          })
        }>
        <Block
          width={width / 3}
          height={height / 5 - 20}
          alignCenter
          backgroundColor={theme.colors.white}
          key={index}>
          <Image
            resizeMode={'contain'}
            source={{uri: item.icon}}
            style={styles.image}
          />
          <Text size={13} fontType={'bold'} paddingVertical={10}>
            {item.name}
          </Text>
        </Block>
      </Pressable>
    );
  };

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => renderItem, [data]);
  return (
    <Block flex>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        keyExtractor={keyExtractor}
        renderItem={memoizedValue}
        numColumns={3}
      />
    </Block>
  );
};

export default ListCategoryFiller;
