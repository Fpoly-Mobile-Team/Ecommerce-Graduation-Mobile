import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Rating} from 'react-native-elements';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

const StarRating = ({startingValue, imageSize, marginVertical, readonly, onFinishRating}) => {
  return (
    <View style={styles.wrapperStar}>
      <Rating
        type="custom"
        startingValue={startingValue}
        imageSize={imageSize ? getSize.m(imageSize) : getSize.m(12)}
        ratingColor={theme.colors.yellow}
        ratingBackgroundColor={theme.colors.white}
        readonly={!readonly ? true : false}
        onFinishRating={onFinishRating}
        style={{
          alignItems: 'flex-start',
          marginVertical: marginVertical,
        }}
      />
    </View>
  );
};

export default StarRating;
