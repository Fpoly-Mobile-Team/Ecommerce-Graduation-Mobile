import {Block, Text} from '@components';
import React from 'react';
import styles from './styles';
import {theme} from '@theme';
import {useSelector} from 'react-redux';
import {ListItem} from 'react-native-elements';
import {ChevronRight} from '@assets/svg/common';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const ListItemInformation = () => {
  const userInfo = useSelector(state => state.userInfo?.data);
  const navigation = useNavigation();
  return (
    <Block marginBottom={20}>
      <Block>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Ngày sinh</ListItem.Title>
          </ListItem.Content>
          <Text size={13} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.birthday === ' ' ? (
              userInfo?.birthday
            ) : (
              <Text
                onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}
                size={13}
                fontType={'medium'}
                color={theme.colors.lightGray}>
                Thiết lập ngay
              </Text>
            )}
          </Text>

          {userInfo?.birthday === ' ' ? (
            ' '
          ) : (
            <Block paddingTop={7}>
              <Pressable
                onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}>
                <ChevronRight width={20} height={20} />
              </Pressable>
            </Block>
          )}
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Giới tính</ListItem.Title>
          </ListItem.Content>
          <Text size={13} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.gender === ' ' ? (
              userInfo?.gender
            ) : (
              <Text
                onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}
                size={13}
                fontType={'medium'}
                color={theme.colors.lightGray}>
                {' '}
                Thiết lập ngay
              </Text>
            )}
          </Text>

          {userInfo?.gender === ' ' ? (
            ' '
          ) : (
            <Block paddingTop={7}>
              <Pressable
                onPress={() => navigation.navigate(routes.SECURITY_SCREEN)}>
                <ChevronRight width={20} height={20} />
              </Pressable>
            </Block>
          )}
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Số điện thoại</ListItem.Title>
          </ListItem.Content>

          <Text size={13} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.phone}
          </Text>
          <Block paddingTop={5}>
            <ChevronRight width={20} height={20} />
          </Block>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Email</ListItem.Title>
          </ListItem.Content>
          <Text size={13} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.email}
          </Text>
        </ListItem>
      </Block>

      <Block paddingVertical={20}>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Địa chỉ</ListItem.Title>
          </ListItem.Content>
          <Text size={13} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.address === '' ? (
              userInfo?.address
            ) : (
              <Text
                onPress={() => navigation.navigate(routes.ADD_ADDRESS_SCREEN)}
                size={13}
                fontType={'medium'}
                color={theme.colors.lightGray}>
                Thiết lập ngay
              </Text>
            )}
          </Text>
          <Block paddingTop={7}>
            {userInfo?.address === ' ' ? (
              ' '
            ) : (
              <Pressable
                onPress={() => navigation.navigate(routes.ADD_ADDRESS_SCREEN)}>
                <ChevronRight width={20} height={20} />
              </Pressable>
            )}
          </Block>
        </ListItem>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Mạng xã hội</ListItem.Title>
          </ListItem.Content>

          <ChevronRight width={20} height={20} />
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

            <ChevronRight width={20} height={20} />
          </ListItem>
        </Pressable>

        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              Tài khoản liên kết
            </ListItem.Title>
          </ListItem.Content>
          <Text size={13} fontType={'medium'} color={theme.colors.gray}></Text>
        </ListItem>
      </Block>
    </Block>
  );
};

export default ListItemInformation;
