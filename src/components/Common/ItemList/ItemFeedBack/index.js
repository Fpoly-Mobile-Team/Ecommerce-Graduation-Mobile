import {images} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const ItemFeedBack = () => {
  return (
    <Block marginBottom={10}>
      <Block row space="between">
        <Image
          source={images.thumnail}
          style={{
            width: getSize.s(40),
            height: getSize.s(40),
            borderRadius: getSize.s(40),
          }}
        />
        <Block flex paddingLeft={10}>
          <Block row space="between">
            <Text fontType="medium">Tran Dinh Huy</Text>
            <Text fontType="light" size={12} color={theme.colors.lightGray}>
              18/03/2021
            </Text>
          </Block>
          <Block row>
            <Rating
              imageSize={getSize.s(12)}
              readonly
              startingValue={4}
              style={styles.ratings}
            />
          </Block>
          <Text marginTop={5}>
            I bought this product two weeks ago. I really really like it so
            elegant.
          </Text>
          <Block flex wrap row marginTop={5}>
            {[1, 2, 3, 4, 5, 6].map(renderImage)}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const renderImage = (item, index) => {
  return (
    <Image
      key={index}
      source={{
        uri: 'https://cf.shopee.vn/file/28df06dd18d91071109d73cfdf08af18',
      }}
      style={{
        ...styles.imglogo,
        marginBottom: getSize.m(5),
        marginLeft: getSize.m(3),
      }}
    />
  );
};

export default ItemFeedBack;
