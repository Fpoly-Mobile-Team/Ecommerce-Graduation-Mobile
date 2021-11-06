import {Block, Header, LazyImage, Text} from '@components';
import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ListItemInformation from './components/ListItemInformation';
import styles from './styles';

const MyselfInformation = () => {
  const userInfo = useSelector(state => state.userInfo?.data);

  return (
    <Block flex>
      <Header checkBackground canGoBack title="Hồ sơ của tôi" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block paddingHorizontal={10} paddingVertical={10}>
          <Block row marginTop={20}>
            <Block alignCenter justifyCenter width={80} height={80}>
              <LazyImage
                source={{
                  uri: userInfo?.avatar,
                }}
                thumbnailSource={{uri: userInfo?.avatar}}
                style={styles.avatar}
              />
            </Block>
            <Block marginLeft={15}>
              <Text marginTop={10} size={17} fontType="semibold">
                {userInfo?.username}
              </Text>
              <Text size={13} marginTop={5}>
                {' '}
                {userInfo?.email}
              </Text>
            </Block>
          </Block>
        </Block>

        <ListItemInformation />
      </ScrollView>
    </Block>
  );
};

export default MyselfInformation;
