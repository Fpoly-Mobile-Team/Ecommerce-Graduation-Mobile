import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import LisProducts from './ListProducts';

const BagScreen = () => {
  const TopSearch = () => {
    return (
      <View style={styles.TopSearch}>
        <Icon name="arrow-back-outline" size={26} />
        <Icon name="search-outline" size={28} />
      </View>
    );
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingTop: 20,
      }}>
      <TopSearch />
      <View>
        <Text style={styles.CartTitle}>Giỏ hàng</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <LisProducts />
        <View style={styles.Promo}>
          <TextInput
            style={styles.input}
            placeholder="Nhập mã khuyến mãi của bạn..."
          />
          <TouchableOpacity onPress={{}}>
            <Icon name="arrow-forward-circle" size={50} style={styles.next} />
          </TouchableOpacity>
        </View>
        <View style={styles.Amount}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tổng tiền:</Text>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            124.000 VND
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.Check}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BagScreen;
