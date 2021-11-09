import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {theme} from '@theme';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import StarRating from '../StarRating';
import {getSize} from '@utils/responsive';

const CardReviews = ({
  name,
  avatar,
  star,
  time,
  image01,
  image02,
  image03,
  description,
}) => {
  const _renderCardReviews = () => {
    return (
      <Block
        backgroundColor={theme.colors.white}
        radius={8}
        paddingTop={24}
        paddingHorizontal={16}
        shadow
        shadowColor={theme.colors.black}
        elevation={8}
        marginHorizontal={16}
        paddingBottom={16}
        marginBottom={32}>
        <Block row space="between">
          <Block row>
            <Pressable style={styles.wrapperAvatarInsideCard}>
              <Image source={avatar} style={styles.imageAvatar} />
            </Pressable>
            <Block marginHorizontal={12}>
              <Text size={14} fontType="semibold" color={theme.colors.black}>
                {name}
              </Text>
              <StarRating startingValue={star} imageSize={14} />
            </Block>
          </Block>
          <Block justifyCenter>
            <Text fontType="medium" size={13} color={theme.colors.lightGray}>
              {time}
            </Text>
          </Block>
        </Block>

        <Text marginVertical={10} justify color={theme.colors.gray} size={14} fontType="medium">
          {description}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrReview}>
          <Image source={image01} style={styles.imgReviews} />
          <Image
            source={image02}
            style={{
              ...styles.imgReviews,
              marginHorizontal: getSize.m(16),
            }}
          />
          <Image source={image03} style={styles.imgReviews} />
        </ScrollView>

      </Block>
    );
  };

  return (
    <Block>
      <_renderCardReviews />
    </Block>
  );
};
export default CardReviews;
