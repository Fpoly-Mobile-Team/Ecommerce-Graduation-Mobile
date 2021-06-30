import React, {useState} from 'react';
import {FlatList, Image, Pressable, SafeAreaView} from 'react-native';
import {Block, Text} from '@components';
import styles from './styles';
import {PlusCircle, MinusCircle, DotsThreeVertical} from 'svg/common';
import {theme} from '@theme';
import {height} from '@utils/responsive';

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
    <Block
      flex
      margin={10}
      backgroundColor={theme.colors.white}
      radius={10}
      style={styles.item}>
      <Image
        source={require('@assets/images/thumnail.jpg')}
        resizeMode={'cover'}
        style={styles.img}></Image>

      <Block flex padding={10}>
        <Block style={styles.ellipsis}>
          <Text size={20} fontType="semibold" color={theme.colors.black}>
            {item.title}
          </Text>
          <Pressable>
            <DotsThreeVertical />
          </Pressable>
        </Block>
        <Block marginTop={5} marginBottom={20} flexDirection="row">
          <Block paddingRight={15}>
            <Text style={styles.status}>
              Color: <Text style={styles.contentStatus}>{item.color}</Text>
            </Text>
          </Block>
          <Text style={styles.status}>
            Size: <Text style={styles.contentStatus}>{item.size}</Text>
          </Text>
        </Block>
        <Block
          alignCenter
          paddingRight={10}
          flexDirection="row"
          style={styles.bottomItem}>
          <Block flexDirection="row" alignCenter>
            <Pressable style={styles.touch}>
              <MinusCircle />
            </Pressable>
            <Text size={16} color={theme.colors.black} paddingHorizontal={13}>
              {item.amount}
            </Text>
            <Pressable style={styles.touch}>
              <PlusCircle />
            </Pressable>
          </Block>
          <Text size={15} color={theme.colors.black} fontType="semibold">
            {item.price}VND
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

const ListItem = () => {
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
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default ListItem;
