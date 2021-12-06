import {Block} from '@components';
import ItemProductCart from '@components/Common/ItemList/ItemProductCart';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const ListItem = ({data}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [dataselected, setDataSelected] = useState([]);
  const indexend = data.length - 1;
  const renderItem = ({item, index}) => {
    return (
      <ItemProductCart
        data={item.productArray}
        items={item}
        id={item._id}
        nameShop={item.nameShop}
        indexSlice={index}
        isCheck={indexend === index}
        dataselected={[dataselected, setDataSelected]}
      />
    );
  };

  return (
    <Block flex>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item._id)}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};
export default ListItem;
