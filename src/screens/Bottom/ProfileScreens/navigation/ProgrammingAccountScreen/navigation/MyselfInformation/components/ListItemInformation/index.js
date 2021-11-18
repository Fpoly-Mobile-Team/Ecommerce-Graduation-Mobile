import {ChevronRight} from '@assets/svg/common';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import moment from 'moment';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {ListItem} from 'react-native-elements';
import styles from './styles';

const dataGender = {
  0: 'Nam',
  1: 'Nữ',
  2: 'Khác',
};

const ListItemInformation = () => {
  const userInfo = useSelector(state => state.userInfo?.data);
  const navigation = useNavigation();
  const checkGender = dataGender[userInfo?.gender];

  const addressDefault = userInfo?.address.find(v => v.isDefault === true);
  const StringAddress = [
    addressDefault?.street,
    addressDefault?.ward,
    addressDefault?.district,
    addressDefault?.province,
  ].join(', ');

  return (
    <Block marginVertical={15}>
      <Block>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Ngày sinh</ListItem.Title>
          </ListItem.Content>

          <Text size={12} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.birthday ? (
              moment(userInfo?.birthday).format('DD/MM/YYYY')
            ) : (
              <Text
                onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}
                size={12}
                fontType={'medium'}
                color={theme.colors.lightGray}>
                Thiết lập ngay
              </Text>
            )}
          </Text>
          <Text>
            {userInfo?.birthday ? (
              ' '
            ) : (
              <Block paddingTop={4}>
                <Pressable
                  onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}>
                  <ChevronRight width={17} height={17} />
                </Pressable>
              </Block>
            )}
          </Text>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Giới tính</ListItem.Title>
          </ListItem.Content>

          <Text size={12} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.gender ? (
              checkGender
            ) : (
              <Text
                onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}
                size={12}
                fontType={'medium'}
                color={theme.colors.lightGray}>
                Thiết lập ngay
              </Text>
            )}
          </Text>
          <Text>
            {userInfo?.gender ? (
              ' '
            ) : (
              <Block paddingTop={4}>
                <Pressable
                  onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}>
                  <ChevronRight width={17} height={17} />
                </Pressable>
              </Block>
            )}
          </Text>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Số điện thoại</ListItem.Title>
          </ListItem.Content>

          <Text size={12} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.phone !== 'null' ? (
              '***** ' + userInfo?.phone.slice(8)
            ) : (
              <Text
                onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}
                size={12}
                fontType={'medium'}
                color={theme.colors.lightGray}>
                Thiết lập ngay
              </Text>
            )}
          </Text>
          <ChevronRight width={17} height={17} />
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Email</ListItem.Title>
          </ListItem.Content>
          <Text size={12} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.email}
          </Text>
          <ChevronRight width={2} height={2} color={theme.colors.white} />
        </ListItem>
      </Block>

      <Block paddingVertical={15}>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Địa chỉ</ListItem.Title>
          </ListItem.Content>

          <Text flex>
            {userInfo?.address ? (
              <Text
                flex
                onPress={() => navigation.navigate(routes.ADDRESS_SCREEN)}
                size={12}
                fontType="medium"
                color={theme.colors.gray}>
                {StringAddress}
              </Text>
            ) : (
              <Text
                onPress={() => navigation.navigate(routes.ADD_ADDRESS_SCREEN)}
                size={12}
                fontType={'medium'}
                color={theme.colors.lightGray}>
                Thiết lập ngay
              </Text>
            )}
          </Text>
          <Text>
            {userInfo?.address ? (
              ' '
            ) : (
              <Block paddingTop={4}>
                <Pressable
                  onPress={() =>
                    navigation.navigate(routes.ADD_ADDRESS_SCREEN)
                  }>
                  <ChevronRight width={17} height={17} />
                </Pressable>
              </Block>
            )}
          </Text>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Ngày tham gia</ListItem.Title>
          </ListItem.Content>

          <Text size={12} fontType={'medium'} color={theme.colors.gray}>
            {moment(userInfo?.created_at).format('DD/MM/YYYY')}
          </Text>
          <ChevronRight width={7} height={7} color={theme.colors.white} />
        </ListItem>
      </Block>

      <Block>
        <Pressable onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}>
          <ListItem style={styles.item}>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                Thiết lập mật khẩu
              </ListItem.Title>
            </ListItem.Content>

            <ChevronRight width={18} height={18} />
          </ListItem>
        </Pressable>
        {/* Navigation đến trang các ví điện tử đã liên kết hoặc các mạng xã hội */}
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              Tài khoản liên kết
            </ListItem.Title>
          </ListItem.Content>
          <Text size={12} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.type}
          </Text>
        </ListItem>
      </Block>
    </Block>
  );
};

export default ListItemInformation;
