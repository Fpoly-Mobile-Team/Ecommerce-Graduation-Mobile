import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import styles from './styles';
import {Searchbar} from 'react-native-paper';
import {Search} from '@assets/svg/common';
import ListMess from './components/ListMessage';

const ChatScreens = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
    handlerSearch(query);
  };
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header title="Tin nhắn" />

      <Block backgroundColor={theme.colors.white}>
        <Searchbar
          icon={Search}
          style={styles.searchStyle}
          inputStyle={styles.inputStyle}
          placeholder={'Tìm kiếm'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Block>
      <Block flex>
        <ListMess />
      </Block>
    </Block>
  );
};

export default ChatScreens;
