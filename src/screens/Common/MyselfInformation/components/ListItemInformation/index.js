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
  function convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join('/');
  }
  return (
    <Block marginBottom={15}>
      <Block>
        <ListItem style={styles.item}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Ngày sinh</ListItem.Title>
          </ListItem.Content>

          <Text size={12} fontType={'medium'} color={theme.colors.gray}>
            {userInfo?.birthday ? (
              convert(userInfo?.birthday)
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
              userInfo?.gender
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
            {'***** ' + userInfo?.phone.slice(8)}
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

          <Text>
            {userInfo?.address ? (
              <Text
                onPress={() => navigation.navigate(routes.ADDRESS_SCREEN)}
                size={12}
                fontType={'medium'}
                color={theme.colors.gray}>
                {userInfo?.address[0].province}
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
            {convert(userInfo?.created_at)}
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
          <Text size={12} fontType={'medium'} color={theme.colors.gray}></Text>
        </ListItem>
      </Block>
    </Block>
  );
};

export default ListItemInformation;
