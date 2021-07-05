import {Block} from '@components';
import ItemPromoCart from '@components/Common/ItemList/ItemsPromoCart';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const DATA = [
  {
    title: 'Personal offer',
    img: require('@assets/images/sale.jpg'),
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: require('@assets/images/sale.jpg'),
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: require('@assets/images/sale.jpg'),
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: require('@assets/images/sale.jpg'),
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: require('@assets/images/sale.jpg'),
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
];
const renderItem = ({item, index}) => {
  return <ItemPromoCart title={item.title} cod={item.cod} time={item.time} />;
};

const ListItem = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Block flex paddingHorizontal={12} paddingTop={15}>
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
