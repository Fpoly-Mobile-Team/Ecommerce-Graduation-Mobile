import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const ItemFeedBack = ({name, avatar, star, description, time, image}) => {
  return (
    <Block marginBottom={24}>
      <Block row space="between">
        <Image
          source={{uri: avatar}}
          style={{
            width: getSize.s(40),
            height: getSize.s(40),
            borderRadius: getSize.s(40),
          }}
        />
        <Block flex paddingLeft={10}>
          <Block row space="between">
            <Text fontType="semibold">{name}</Text>
            <Text size={12} color={theme.colors.lightGray} fontType="medium">
              {time}
            </Text>
          </Block>
          <Block row>
            <Rating
              imageSize={getSize.s(12)}
              readonly
              startingValue={star}
              style={styles.ratings}
            />
          </Block>
          <Text size={13} marginVertical={5} justify>
            {description}
          </Text>
          <Block flex wrap row>
            {image.map(renderImage)}
          </Block>

          <Block
            marginTop={12}
            marginHorizontal={-200}
            backgroundColor={'#EBF0FF'}
            height={1}
            borderRadius={5}></Block>
        </Block>
      </Block>
    </Block>
  );
};

const renderImage = (item, index) => {
  return (
    <Image
      key={index}
      source={{uri: item}}
      style={{
        ...styles.imglogo,
        marginBottom: getSize.m(5),
        marginRight: getSize.m(5),
      }}
    />
  );
};

export default ItemFeedBack;
