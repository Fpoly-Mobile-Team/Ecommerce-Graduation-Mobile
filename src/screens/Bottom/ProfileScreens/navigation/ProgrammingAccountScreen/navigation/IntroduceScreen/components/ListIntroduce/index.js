/* eslint-disable react-hooks/exhaustive-deps */
import {Block} from '@components';
import ItemIntroduce from '@components/Common/ItemList/ItemIntroduce';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Pressable} from 'react-native';

const ListIntroduce = ({data}) => {
  const navigation = useNavigation();
  const _renderItem = React.useCallback(({item}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate(routes.INTRODUCE_DETAIL, {data: item})
        }>
        <ItemIntroduce title={item.title} content={item.content} />
      </Pressable>
    );
  }, []);
  const keyExtractor = React.useCallback((item, index) => item._id, []);

  const memoizedValue = React.useMemo(() => _renderItem, [data]);
  return (
    <Block flex>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={memoizedValue}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};
export default ListIntroduce;
