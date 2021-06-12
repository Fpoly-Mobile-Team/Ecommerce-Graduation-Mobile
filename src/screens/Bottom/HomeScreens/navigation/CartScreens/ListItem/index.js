import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {PlusCircle, MinusCircle, DotsThreeVertical} from 'svg/common';

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
const Item = ({item, onPress}) => {
  return (
    <View style={styles.item}>
      <View style={styles.imgLeft}>
        <Image
          source={require('@assets/images/thumnail.jpg')}
          resizeMode={'cover'}
          style={styles.img}></Image>
      </View>

      <View style={styles.fomatItem}>
        <View style={styles.ellipsis}>
          <Text style={styles.Card}>{item.title}</Text>
          <TouchableOpacity>
            <DotsThreeVertical />
          </TouchableOpacity>
        </View>
        <View style={styles.closize}>
          <View style={styles.propety}>
            <Text style={{fontSize: 12, color: 'gray'}}>Color:</Text>
            <Text style={[styles.color]}>{item.color}</Text>
          </View>
          <View style={styles.propety}>
            <Text style={{fontSize: 12, color: 'gray'}}>Size:</Text>
            <Text style={[styles.size]}>{item.size}</Text>
          </View>
        </View>
        <View style={styles.bottomItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.touch}>
              <MinusCircle />
            </TouchableOpacity>
            <Text style={[styles.amount]}>{item.amount}</Text>
            <TouchableOpacity style={styles.touch}>
              <PlusCircle />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{item.price}VND</Text>
        </View>
      </View>
    </View>
  );
};

const ListItem = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};
export default ListItem;
