import {Button, Text} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import styles from './styles';

const ItemPromoScreen = ({name, title, date, image, index, isCheck}) => {
  const marginTop = index === 0 ? getSize.s(10) : 0;
  const marginBottom = isCheck ? getSize.s(20) : 0;
  return (
    <View style={[styles.ItemContainer, {marginTop, marginBottom}]}>
      <View style={styles.ItemCart}>
        <View style={styles.ItemTop}>
          <View style={styles.box}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.imglogo}
            />
          </View>
          <View style={styles.boxLeft}>
            <View style={{paddingTop: getSize.s(16)}}>
              <Text style={styles.textDate}>{name}</Text>
              <Text
                fontType={'medium'}
                numberOfLines={1}
                style={styles.txtTitle}>
                {title}
              </Text>
            </View>
          </View>
        </View>

        <DashedLine dashColor="#E9EAEB" dashLength={6} style={styles.dash} />

        <View style={styles.ItemBottom}>
          <View style={styles.ItemText}>
            <Text style={styles.textDate}>HSD: {date}</Text>
          </View>
          <Button title="Lưu" height={28} width={46} style={styles.button} />
        </View>

        <View style={styles.ItemIconRight} />
        <View style={styles.ItemIconLeft} />
      </View>
    </View>
  );
};

export default ItemPromoScreen;
