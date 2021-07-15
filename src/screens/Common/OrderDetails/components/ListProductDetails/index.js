import {images} from '@assets';
import {Block, Text} from '@components';
// import ItemProductCart from '@components/Common/ItemList/ItemProductCart';
import ItemDetailHistory from '@components/Common/ItemList/ItemDetailHistory';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const DATA = [
  {
    title: 'Pullover',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Black',
    size: 'L',
    price: '30.000',
    amount: '1',
  },
  {
    title: 'T_shirt',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Orangre',
    size: 'M',
    price: '30.000',
    amount: '1',
  },
  {
    title: 'Sport Dress',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Blue',
    size: 'S',
    price: '30.000',
    amount: '1',
  },
  {
    title: 'Pullover',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Black',
    size: 'L',
    price: '30.000',
    amount: '1',
  },
  {
    title: 'T_shirt',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Orangre',
    size: 'M',
    price: '30.000',
    amount: '1',
  },
  {
    title: 'Sport Dress',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Blue',
    size: 'S',
    price: '30.000',
    amount: '1',
  },
];
const renderItem = ({item}) => {
  return (
    <ItemDetailHistory
      title={item.title}
      color={item.color}
      size={item.size}
      price={item.price}
      amount={item.amount}
    />
  );
};

const ListItem = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Block flex paddingHorizontal={12}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};
export default ListItem;
