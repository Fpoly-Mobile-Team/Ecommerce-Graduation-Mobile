import {Block, Text} from '@components';
import React, {useState, useEffect, Fragment} from 'react';
import {Image, Pressable, Modal} from 'react-native';
import {theme} from '@theme';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import StarRating from '../StarRating';
import {getSize, width} from '@utils/responsive';
import OptionsMenu from 'react-native-option-menu';
import ImageViewer from 'react-native-image-zoom-viewer';
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
  const [ImageViwerIsVisible, showImageViwer] = useState(false);
  let [viewingIndex, setViewingIndex] = useState(-1);
  useEffect(() => {
    viewingIndex !== -1 && showImageViwer(true);
  }, [viewingIndex]);
  useEffect(() => {
    !ImageViwerIsVisible && setViewingIndex(-1);
  }, [ImageViwerIsVisible]);

  const _renderImage = (item, index) => {
    return (
      <Pressable
        style={styles.wrapper}
        key={item}
        onPress={() => setViewingIndex(index)}>
        <Image
          key={index}
          source={{uri: item}}
          style={{
            ...styles.imgReviews,
            marginLeft: index === 0 ? 0 : getSize.m(12),
          }}
        />
      </Pressable>
    );
  };

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
      <Fragment>
        {!!ImageViwerIsVisible && (
          <Modal
            transparent={true}
            onRequestClose={() => showImageViwer(false)}>
            <ImageViewer
              imageUrls={image.map(f => ({url: f}))}
              index={viewingIndex}
            />
          </Modal>
        )}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrReview}>
          {image?.map(_renderImage)}
        </ScrollView>
      </Fragment>
    </Block>
  );
};
export default CardReviews;
