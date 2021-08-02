import {images} from '@assets';
import {Block} from '@components';
import ItemPromoCart from '@components/Common/ItemList/ItemPromoCart';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const DATA = [
  {
    title: 'Personal offer',
    img: images.sale,
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: images.sale,
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: images.sale,
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: images.sale,
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
  {
    title: 'Personal offer',
    img: images.sale,
    cod: 'mypromocode2020',
    time: '6 ngày',
  },
];

const ListItem = ({isClosed}) => {
  const [selectedId, setSelectedId] = useState(null);
  const _onPress = () => {
    isClosed.current.close();
  };
  const renderItem = ({item, index}) => {
    return (
      <ItemPromoCart
        title={item.title}
        cod={item.cod}
        time={item.time}
        onPress={_onPress}
      />
    );
  };

  return (
    <Block flex paddingHorizontal={12} paddingTop={15}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(_, index) => String(index)}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};
export default ListItem;
