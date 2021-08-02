import {Block, Button, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import styles from './styles';

const ItemOrderHistory = ({
  name,
  date,
  shop,
  quantity,
  price,
  status,
  checkColor,
  isCheck,
}) => {
  const navigation = useNavigation();
  return (
    <Block
      shadow
      flex
      flexGrow
      marginHorizontal={15}
      radius={7}
      marginTop={15}
      marginBottom={isCheck ? 15 : 0}
      paddingVertical={10}
      paddingHorizontal={15}
      backgroundColor={theme.colors.white}>
      <Block row space="between" paddingVertical={10}>
        <Text fontType="bold" size={17}>
          {name}
        </Text>
        <Text color={theme.colors.lightGray}>{date}</Text>
      </Block>
      <Text style={styles.containText}>
        <Text style={styles.label}>Cửa hàng:{'  '}</Text>
        {shop}
      </Text>
      <Block row space="between" paddingVertical={10}>
        <Text style={styles.containText}>
          <Text style={styles.label}>Số lượng:{'  '}</Text>
          {quantity}
        </Text>
        <Text style={styles.containText}>
          <Text style={styles.label}>Thành tiền:{'  '}</Text>
          {price} VND
        </Text>
      </Block>

      <Block row space="between" alignCenter>
        <Button
          onPress={() => navigation.navigate(routes.ORDERDETAILS)}
          height={35}
          title="Details"
          titleStyle={{color: theme.colors.black}}
          style={styles.btnOutline}
        />

        <Text color={checkColor ? theme.colors.red : theme.colors.greenStatus}>
          {status}
        </Text>
      </Block>
    </Block>
  );
};

export default ItemOrderHistory;
