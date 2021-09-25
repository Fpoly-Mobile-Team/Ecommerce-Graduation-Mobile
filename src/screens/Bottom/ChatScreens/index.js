import {Search} from '@assets/svg/common';
import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import ListMess from './components/ListMessage';
import styles from './styles';

const ChatScreens = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
  };
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header title="Tin nhắn" />

      <Searchbar
        icon={Search}
        style={styles.searchStyle}
        inputStyle={styles.inputStyle}
        placeholder={'Tìm kiếm...'}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <ListMess />
    </Block>
  );
};

export default ChatScreens;
