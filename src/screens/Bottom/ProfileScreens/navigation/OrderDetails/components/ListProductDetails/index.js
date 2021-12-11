import {Block} from '@components';
import ItemDetailHistory from '@components/Common/ItemList/ItemDetailHistory';
import React from 'react';
import {FlatList} from 'react-native';

const renderItem = ({item}) => {
  return (
    <ItemDetailHistory
      title={item.productInfo.name}
      color={item.color}
      price={item.productInfo.price * (1 - item.productInfo.sellOff)}
      amount={item.quantity}
      image={item.productInfo.images[0]}
      _id={item.productInfo._id}
    />
  );
};

const ListItem = ({data}) => {
  console.log(data, 'jaja');
  return (
    <Block flex paddingTop={10}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};
export default ListItem;
