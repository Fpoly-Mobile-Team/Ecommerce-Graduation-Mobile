import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {theme} from '@theme';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import StarRating from '../StarRating';
import {getSize, width} from '@utils/responsive';
import OptionsMenu from 'react-native-option-menu';
import {icons} from '@assets';

const CardReviews = ({
  _id,
  name,
  avatar,
  star,
  time,
  image,
  description,
  onEvent,
  onEdit,
  onDelete,
}) => {
  const _renderImage = (item, index) => {
    return (
      <Image
        key={index}
        source={{uri: item}}
        style={{
          ...styles.imgReviews,
          marginLeft: index === 0 ? 0 : getSize.m(12),
        }}
      />
    );
  };
  // console.log('image', image);
  return (
    <Block
      backgroundColor={theme.colors.white}
      radius={8}
      paddingTop={onEvent ? 8 : 24}
      paddingHorizontal={16}
      shadow
      shadowColor={theme.colors.black}
      elevation={6}
      marginHorizontal={6}
      marginBottom={16}>
      <Pressable style={{alignItems: 'flex-end'}}>
        {onEvent && (
          <OptionsMenu
            button={icons.mening}
            buttonStyle={styles.buttonStyle}
            destructiveIndex={1}
            options={['Sửa đánh giá', 'Xóa đánh giá', 'Hủy thao tác']}
            actions={[onEdit, onDelete]}
          />
        )}
      </Pressable>
      <Block row space="between">
        <Block row>
          <Pressable style={styles.wrapperAvatarInsideCard}>
            <Image source={{uri: avatar}} style={styles.imageAvatar} />
          </Pressable>
          <Block marginHorizontal={12} width={width / 3}>
            <Text
              size={14}
              fontType="semibold"
              color={theme.colors.black}
              marginBottom={2}>
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

      <Text
        marginTop={8}
        justify
        color={theme.colors.gray}
        size={14}
        fontType="medium">
        {description}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrReview}>
        {image?.map(_renderImage)}
      </ScrollView>
    </Block>
  );
};
export default CardReviews;
