import {Block, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import ItemSearch from '@components/Common/ItemList/ItemSearch';
import {data} from './components/data';

const SearchScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <ItemSearch
  
    />
  );

  return (
    <Block flex>
      <Header title="Thông Báo" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default SearchScreen;

