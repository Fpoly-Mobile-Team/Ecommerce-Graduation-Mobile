import {Block} from '@components';
import ItemIntroduce from '@components/Common/ItemList/ItemIntroduce';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';

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
