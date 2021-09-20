import {Button} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Dash from 'react-native-dash';
import styles from './styles';
import { theme } from '../../../../theme';

const ItemPromoScreen = ({name, title, date, image}) => {
  return (
    <View style={styles.ItemContainer}>
      <View style={styles.ItemCart}>
        <View style={styles.ItemTop}>
          <View
            style={{
              width: '20%',
              height: '100%',
              borderRadius: 8,
            }}>
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
              <Text style={{fontWeight: '500', fontSize: 14, marginTop: 5}}>
                {title}
              </Text>
            </View>
          </View>
        </View>
          <Dash style={{width:'89%', height:6, borderStyle: 'solid',paddingHorizontal:20,flexDirection:'row'}}/>
        <View style={styles.ItemBottom}>
          <View style={styles.ItemText}>
            <Text style={styles.textDate}>HSD: {date}</Text>
          </View>
          <Button
            title="Lưu"
            height={28}
            width={46}
            style={{
              backgroundColor: '#3B5998',
              borderRadius: getSize.s(4),
              marginRight: getSize.s(16),
            }}
          />
        </View>
      
        <View style={styles.ItemIconRight} />
        <View style={styles.ItemIconLeft} />
      </View>
    </View>
  );
};

export default ItemPromoScreen;
