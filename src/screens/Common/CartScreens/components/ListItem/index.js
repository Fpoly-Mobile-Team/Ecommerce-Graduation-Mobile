import {Block} from '@components';
import ItemProductCart from '@components/Common/ItemList/ItemProductCart';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const DATA = [
  {
    id: '1',
    productArray: [
      {
        id: '1',
        title: 'CHÂN VÁY TENNIS ĐEN TRƠN HUYỀN THOẠI',
        img: 'https://cf.shopee.vn/file/085bdf27f0614e9f97ac0bf1f89d8051',
        nameshop: 'Shop Đầm Xinh',
        color: 'Black',
        size: 'L',
        price: '30000',
        amount: '1',
      },
      {
        id: '2',
        title: ' CHÂN VÁY TENNIS ĐEN TRƠN HUYỀN THOẠI',
        img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
        nameshop: 'Shop Đầm Xinh',
        color: 'Black',
        size: 'S',
        price: '980000',
        amount: '1',
      },
      {
        id: '3',
        title: ' CHÂN VÁY TENNIS ĐEN TRƠN HUYỀN THOẠI',
        img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/310/270/products/114-8d2f87e5-2acf-4a5c-bf47-56e7d17e0715.jpg?v=1604727914297',
        nameshop: 'Shop Đầm Xinh',
        color: 'Black',
        size: 'S',
        price: '980000',
        amount: '1',
      },
    ],
  },
  {
    id: '2',
    productArray: [
      {
        id: '8',
        title: 'CHÂN VÁY TENNIS ĐEN TRƠN HUYỀN THOẠI',
        img: 'https://cf.shopee.vn/file/085bdf27f0614e9f97ac0bf1f89d8051',
        nameshop: 'Shop Bé Xinh',
        color: 'Black',
        size: 'L',
        price: '30000',
        amount: '1',
      },
      {
        id: '9',
        title: ' CHÂN VÁY TENNIS ĐEN TRƠN HUYỀN THOẠI',
        img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
        nameshop: 'Shop Bé Xinh',
        color: 'Black',
        size: 'S',
        price: '980000',
        amount: '1',
      },
      {
        id: '10',
        title: ' CHÂN VÁY TENNIS ĐEN TRƠN HUYỀN THOẠI',
        img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/310/270/products/114-8d2f87e5-2acf-4a5c-bf47-56e7d17e0715.jpg?v=1604727914297',
        nameshop: 'Shop Bé Xinh',
        color: 'Black',
        size: 'S',
        price: '580000',
        amount: '1',
      },
    ],
  },
];
const indexend = DATA.length - 1;

const ListItem = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [dataselected, setDataSelected] = useState([]);

  const renderItem = ({item, index}) => {
    return (
      <ItemProductCart
        data={item.productArray}
        items={item}
        id={item.id}
        indexSlice={index}
        isCheck={indexend === index}
        dataselected={[dataselected, setDataSelected]}
      />
    );
  };

  return (
    <Block flex>
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
