import React from 'react';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {Block} from '@components';
import {Image, View, Pressable, Text} from 'react-native';
import styles from './styles';

const ItemPromoScreen = ({name, title, date, image}) => {
  return (
    <View style={styles.ItemContainer}>
      <View style={styles.ItemCart}>
        <View style={styles.ItemTop}>
          <View style={{width: '20%', height: '100%', borderRadius: 8}}>
            <View style={{alignItems: 'center', top: 21}}>
              <Image
                source={{
                  uri: image,
                }}
                style={{...styles.imglogo, position: 'absolute'}}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{width: '80%', height: '100%', borderRadius: 8}}>
            <View style={{top: 16}}>
              <Text style={styles.textDate}>{name}</Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 14, fontStyle: 'Inter'}}>
                {title}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ItemBottom}>
          <View style={styles.ItemText}>
            <Text style={styles.textDate}>HSD:</Text>
            <Text style={styles.textDate}>{date}</Text>
          </View>
          <View style={{paddingHorizontal: 21}}>
            <Pressable
              style={{
                backgroundColor: '#3B5998',
                width: 46,
                height: 28,
                borderRadius: 4,
                paddingHorizontal: 10,
                paddingVertical: 4,
              }}>
              <Text style={{color: 'white'}}>Lưu</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.ItemIconRight} />
        <View></View>
        <View style={styles.ItemIconLeft} />
      </View>
    </View>
  );
};

export default ItemPromoScreen;
