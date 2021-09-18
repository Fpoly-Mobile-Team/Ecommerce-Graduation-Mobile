import {images} from '@assets';
import {ADot} from '@assets/svg/common';
import {Block, Text} from '@components';
import {Pressable} from 'react-native';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {Avatar} from 'react-native-paper';

const ItemMessage = ({name, mess, status, isCheck}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.CHATBOX)}>
      <Block
        flex
        backgroundColor={theme.colors.white}
        padding={15}
        marginBottom={1.5}>
        <Block alignCenter row>
          <Avatar.Image size={40} source={images.avatar} />
          <Block paddingLeft={10} column>
            <Text
              //nếu tin chưa đọc thì tên in đậm
              fontType={isCheck ? 'bold' : 'regular'}
              color={theme.colors.black}
              size={15}>
              {name}
            </Text>
            <Block alignCenter row>
              <Text
                //nếu tin chưa đọc thì mess màu đen và ngược lại
                color={isCheck ? theme.colors.black : theme.colors.lightGray}
                size={15}>
                {mess}
              </Text>
              <Block paddingHorizontal={5}>
                <ADot />
              </Block>
              <Text color={theme.colors.lightGray} size={14}>
                {status}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemMessage;
