import {Block, Text, LazyImage, Header} from '@components';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {useSelector} from 'react-redux';
import {BackgroundColorShop} from '@assets/svg/common';
import styles from './styles';
import {theme} from '@theme';
import ListItemInformation from './components/ListItemInformation';
import {ScrollView} from 'react-native';

const MyselfInformation = () => {
  const userInfo = useSelector(state => state.userInfo?.data);
  return (
    <Block flex>
      <Header canGoBack title="Hồ sơ của tôi" />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Block flex>
          <Block paddingBottom={20}>
            <BackgroundColorShop width={width} height={getSize.s(180)} />
          </Block>
          <Block absolute top={7} paddingHorizontal={10}>
            <Block row marginVertical={25} paddingHorizontal={30}>
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
                <Text size={13} color={theme.colors.white}>
                  {' '}
                  {userInfo?.email}
                </Text>
              </Block>
            </Block>
          </Block>
          <ListItemInformation />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default MyselfInformation;
