import {Block, Text} from '@components';
import moment from 'moment';
import React from 'react';
import {ListItem} from 'react-native-elements';
import styles from './styles';

const ListItemStoreInformation = ({
  data,
  productStore,
  averageRating,
  countFeedback,
}) => {
  return (
    <Block flex marginVertical={5}>
      <Block>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Đánh giá</ListItem.Title>
          </ListItem.Content>
          <Text size={12}>
            {averageRating} / 5 ({countFeedback} đánh giá)
          </Text>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Email</ListItem.Title>
          </ListItem.Content>

          <Text size={12}>{data?.email}</Text>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Số điện thoại</ListItem.Title>
          </ListItem.Content>

          <Text size={12}>{data?.phone}</Text>
        </ListItem>
      </Block>

      <Block paddingVertical={25}>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Người đại diện</ListItem.Title>
          </ListItem.Content>
          <Text size={12}>{data?.displayName}</Text>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Ngày tham gia</ListItem.Title>
          </ListItem.Content>

          <Text size={12}>{moment(data?.createDate).format('DD-MM-YYYY')}</Text>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Sản phẩm</ListItem.Title>
          </ListItem.Content>

          <Text size={12}>{productStore?.length + ' sản phẩm'}</Text>
        </ListItem>
      </Block>

      <Block>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Địa chỉ</ListItem.Title>
          </ListItem.Content>
          <Text flex size={12}>
            {data?.address}
          </Text>
        </ListItem>
      </Block>
    </Block>
  );
};

export default ListItemStoreInformation;
