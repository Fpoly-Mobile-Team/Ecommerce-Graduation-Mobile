import {Block, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
 import ItemAddress from '@components/Common/ItemList/ItemAddress';
import {data} from './components/data';
import {theme} from '@theme';
 import {PlusCircle} from '@assets/svg/common'


const AddressCreens = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <ItemAddress
      title={item.title}
      address={item.address}
      defaault={item.defaault}
    />
  );

  return (
    <Block flex>
      <Header checkBackground canGoBack  title="Địa chỉ giao hàng" />
      
     <FlatList
       data={data}
       renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}

     />
     <Block absolute bottom={0} right={0} padding={10} >
     
       <PlusCircle/>
     </Block>
     </Block>
   
  );
};

export default AddressCreens;
