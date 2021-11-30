import {Button, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import styles from './styles';

const ItemPromoScreen = ({
  check,
  name,
  title,
  date,
  image,
  index,
  isCheck,
  addVoucher,
  save,
}) => {
  const marginTop = index === 0 ? getSize.s(10) : 0;
  const marginBottom = isCheck ? getSize.s(20) : 0;
  const navigation = useNavigation();
  console.log('AAAAAAA', save);

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
          {check ? (
            <Button
              onPress={!save ? addVoucher : null}
              title={!save ? 'Lưu' : 'Đã lưu'}
              height={!save ? 28 : 30}
              width={!save ? 46 : 72}
              backgroundColor={
                !save ? theme.colors.pink : theme.colors.bgiconheader
              }
              style={styles.button}
            />
          ) : (
            <Button
              title="Sử dụng"
              onPress={() => navigation.navigate(routes.CARTSCREENS)}
              height={30}
              width={72}
              backgroundColor={theme.colors.pink}
              style={styles.button}
            />
          )}
        </View>

        <View style={styles.ItemIconRight} />
        <View style={styles.ItemIconLeft} />
      </View>
    </View>
  );
};

export default ItemPromoScreen;
