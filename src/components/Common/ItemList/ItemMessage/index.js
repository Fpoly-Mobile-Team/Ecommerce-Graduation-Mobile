import {images} from '@assets';
import {ADot} from '@assets/svg/common';
import {Block, Text} from '@components';
import {Pressable} from 'react-native';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {width} from '@utils/responsive';

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
              size={15}
              fontType={isCheck ? 'bold' : 'medium'}
              color={theme.colors.black}>
              {name}
            </Text>
            <Block alignCenter row space="between">
              <Text
                //nếu tin chưa đọc thì mess màu đen và ngược lại
                width={width / 1.65}
                numberOfLines={1}
                color={isCheck ? theme.colors.black : theme.colors.lightGray}
                size={14}>
                {mess}
              </Text>
              <Block row alignCenter>
                <ADot />
                <Text
                  color={theme.colors.lightGray}
                  size={13}
                  paddingHorizontal={5}>
                  {status}
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemMessage;
