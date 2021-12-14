import ItemDetailHistory from '@components/Common/ItemList/ItemDetailHistory';
import {reverseString} from '@utils/needed';
import {getSize} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';

const renderItem = item => {
  return (
    <ItemDetailHistory
      key={reverseString(item.productInfo._id)}
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
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: getSize.m(16),
        paddingTop: getSize.m(16),
      }}>
      {data?.map(renderItem)}
    </ScrollView>
  );
};
export default ListItem;
