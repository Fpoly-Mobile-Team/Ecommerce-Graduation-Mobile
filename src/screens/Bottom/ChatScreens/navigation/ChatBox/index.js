import {Block, Text} from '@components';
import {images} from '@assets';
import {theme} from '@theme';
import React, {useState, useCallback, useEffect} from 'react';
import {Avatar} from 'react-native-paper';
import {Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ChevronLeft, HorizontalDot} from '@assets/svg/common';
import {GiftedChat} from 'react-native-gifted-chat';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Xin chào! Vui lòng để lại tin nhắn cho shop nhé!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const navigation = useNavigation();
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Block
        alignCenter
        row
        space="between"
        backgroundColor={theme.colors.pink}
        paddingTop={45}>
        <Block padding={10} alignCenter row>
          <Pressable onPress={() => navigation.goBack()}>
            <ChevronLeft isColor />
          </Pressable>
          <Block paddingHorizontal={5}>
            <Avatar.Image size={35} source={images.avatar} />
          </Block>
          <Text color={theme.colors.white} paddingHorizontal={5}>
            FM Style
          </Text>
        </Block>
        <Block paddingHorizontal={10}>
          <HorizontalDot />
        </Block>
      </Block>
      <Block backgroundColor={theme.colors.background}>
        <Block
          radius={8}
          backgroundColor={theme.colors.white}
          row
          padding={5}
          marginVertical={8}
          marginHorizontal={15}
          alignCenter>
          <Image
            style={{width: 30, height: 40, borderRadius: 3}}
            source={images.thumnail}
          />
          <Block paddingLeft={10}>
            <Text paddingBottom={5}>Áo flannel xám form rộng</Text>
            <Text fontType={'bold'} color={theme.colors.red} size={15}>
              700.000 đ
            </Text>
          </Block>
        </Block>
      </Block>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderAvatar={null}
        user={{
          _id: 1,
        }}
      />
    </Block>
  );
};

export default ChatBox;
