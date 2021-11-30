import React from 'react';
import {Block, Header, Text} from '@components';
import {theme} from '@theme';
import {Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {height, width} from '@utils/responsive';
import styles from './styles';

const DetailedNotice = ({route}) => {
  const config = useSelector(state => state.config?.data);
  const coloring = `${config?.backgroundcolor}60`;
  const photos = 'https://i.imgur.com/SfUNX8R.png';
  const {item: receive} = route.params;

  const _renderMainPhoto = () => {
    return (
      <Block>
        <Block
          backgroundColor={coloring}
          height={height / (4.4 / 2)}
          alignCenter
          justifyCenter>
          <Block
            backgroundColor={theme.colors.orange}
            radius={165}
            width={165}
            height={165}
            alignCenter
            justifyCenter>
            <Image source={{uri: photos}} style={styles.photos} />
          </Block>
        </Block>
      </Block>
    );
  };
  const _renderDetailed = () => {
    return (
      <Block paddingHorizontal={12} marginVertical={18}>
        <Text fontType="bold" size={16}>
          {receive?.title}
        </Text>
        <Text fontType="medium" justify size={13}>
          {receive?.content}
        </Text>

        <Block space="between" row alignCenter wrap marginTop={12}>
          {receive?.images?.map(_renderImages)}
        </Block>
      </Block>
    );
  };

  const _renderImages = (item, index) => {
    return (
      <Block
        key={index}
        width={width / 2 - 18}
        height={width / 2 - 18}
        marginBottom={12}
        backgroundColor={'#F3F3F3'}
        radius={8}
        alignCenter
        justifyCenter>
        <Image
          key={index}
          source={{uri: item}}
          style={{
            ...styles.photosImages,
          }}
        />
      </Block>
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header title="Chi tiết thông báo" checkBackground canGoBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <_renderMainPhoto />
        <_renderDetailed />
      </ScrollView>
    </Block>
  );
};

export default DetailedNotice;
