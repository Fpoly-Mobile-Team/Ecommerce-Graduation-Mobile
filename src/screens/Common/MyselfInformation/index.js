import {BackgroundColorShop} from '@assets/svg/common';
import {Block, Header, LazyImage, Text} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import ListItemInformation from './components/ListItemInformation';
import styles from './styles';

const MyselfInformation = () => {
  const userInfo = useSelector(state => state.userInfo?.data);
  const {top} = useSafeAreaInsets();
  return (
    <Block flex>
      <Header canGoBack title="Hồ sơ của tôi" />

      <Block marginTop={getSize.s(-20)}>
        <BackgroundColorShop width={width} height={getSize.s(190)} />
      </Block>
      <Block
        absolute
        top={top + 50}
        alignCenter
        justifyCenter
        paddingHorizontal={10}>
        <Block row marginTop={20} paddingHorizontal={30}>
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
            <Text
              color={theme.colors.white}
              marginTop={10}
              size={17}
              fontType="semibold">
              {userInfo?.username}
            </Text>
            <Text size={13} marginTop={5} color={theme.colors.white}>
              {' '}
              {userInfo?.email}
            </Text>
          </Block>
        </Block>
      </Block>

      <ListItemInformation />
    </Block>
  );
};

export default MyselfInformation;
