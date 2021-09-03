import {PlusCircle} from '@assets/svg/common';
import {Block, Header} from '@components';
import ItemAddress from '@components/Common/ItemList/ItemAddress';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {data} from './components/data';

const AddressScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => (
    <ItemAddress
      title={item.title}
      address={item.address}
      phone={item.phone}
      index={index}
      ic_default={item.ic_default}
    />
  );

  return (
    <Block flex>
      <Header checkBackground canGoBack title="Địa chỉ giao hàng" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Block absolute bottom={20} right={0} padding={10}>
        <Pressable
          onPress={() => navigation.navigate(routes.ADD_ADDRESS_SCREEN)}>
          <PlusCircle />
        </Pressable>
      </Block>
    </Block>
  );
};

export default AddressScreen;
