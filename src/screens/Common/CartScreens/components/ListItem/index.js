import {Block} from '@components';
import ItemProductCart from '@components/Common/ItemList/ItemProductCart';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Pullover',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Black',
    size: 'L',
    price: '30.000',
    amount: '1',
  },
  {
    id: '2',
    title: 'T_shirt',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Orangre',
    size: 'M',
    price: '30.000',
    amount: '1',
  },
  {
    id: '3',
    title: 'Sport Dress',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Blue',
    size: 'S',
    price: '30.000',
    amount: '1',
  },
  {
    id: '4',
    title: 'Pullover',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Black',
    size: 'L',
    price: '30.000',
    amount: '1',
  },
  {
    id: '5',
    title: 'T_shirt',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Orangre',
    size: 'M',
    price: '30.000',
    amount: '1',
  },
  {
    id: '6',
    title: 'Sport Dress',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Blue',
    size: 'S',
    price: '30.000',
    amount: '1',
  },
];
const renderItem = ({item, index}) => {
  return (
    <ItemProductCart
      index={index}
      title={item.title}
      price={item.price}
      amount={item.amount}
      color={item.color}
      size={item.size}
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
