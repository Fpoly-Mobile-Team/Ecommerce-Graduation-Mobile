import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DATA = [
  {
    id: '1',
    title: 'Pullover',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Black',
    size: 'L',
    price: '30$',
    amount: '1',
  },
  {
    id: '2',
    title: 'T_shirt',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Orangre',
    size: 'M',
    price: '30$',
    amount: '1',
  },
  {
    id: '3',
    title: 'Sport Dress',
    img: 'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg',
    color: 'Blue',
    size: 'S',
    price: '30$',
    amount: '1',
  },
];
const Item = ({item, onPress}) => {
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <View style={styles.imgLeft}>
        <Image
          source={
            'https://sweatshirtstation.com/images/charles-river-apparel-9905-classic-solid-pullover-forest1.jpg'
          }
          resizeMode={'cover'}
          style={styles.img}></Image>
      </View>

      <View style={styles.FomatItem}>
        <View style={styles.ellipsis}>
          <Text style={styles.Card}>{item.title}</Text>
          <Icon name="ellipsis-vertical-outline" size={25} />
        </View>
        <View style={styles.closize}>
          <Text style={{fontSize: 15}}>Color:</Text>
          <Text style={[styles.fomat1]}>{item.color}</Text>
          <Text style={{fontSize: 15, paddingLeft: 20}}>Size:</Text>
          <Text style={[styles.size]}>{item.size}</Text>
        </View>
        <View style={styles.BottomItem}>
          <TouchableOpacity style={styles.touch}>
            <Icon name="remove" size={30} />
          </TouchableOpacity>
          <Text style={[styles.fomat2]}>{item.amount}</Text>
          <TouchableOpacity style={styles.touch}>
            <Icon name="add" size={30} style={{textAlign: 'center'}} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: 'black', paddingLeft: 50}}>
            {item.price}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>;
};
const ListPro = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
export default ListPro;
