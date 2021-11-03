import {Search} from '@assets/svg/common';
import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import ListMess from './components/ListMessage';
import styles from './styles';
import {useSelector} from 'react-redux';

const ChatScreens = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
  };
  const user = useSelector(state => state.tokenUser?.data);
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header title="Tin nhắn" />
      {user ? (
        <Searchbar
          icon={Search}
          style={styles.searchStyle}
          inputStyle={styles.inputStyle}
          placeholder={'Tìm kiếm...'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      ) : (
        <Block></Block>
      )}

      <ListMess />
    </Block>
  );
};

export default ChatScreens;
