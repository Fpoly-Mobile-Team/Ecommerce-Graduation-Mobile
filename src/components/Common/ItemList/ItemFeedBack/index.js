import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useState, useEffect, Fragment} from 'react';
import {Image, Pressable, Modal} from 'react-native';
import {Rating} from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';
import styles from './styles';

const ItemFeedBack = ({name, avatar, star, description, time, image}) => {
  const [ImageViwerIsVisible, showImageViwer] = useState(false);
  let [viewingIndex, setViewingIndex] = useState(-1);
  useEffect(() => {
    viewingIndex !== -1 && showImageViwer(true);
  }, [viewingIndex]);
  useEffect(() => {
    !ImageViwerIsVisible && setViewingIndex(-1);
  }, [ImageViwerIsVisible]);

  const renderImage = (item, index) => {
    return (
      <Pressable
        style={styles.wrapper}
        key={item}
        onPress={() => setViewingIndex(index)}>
        <Image
          key={index}
          source={{uri: item}}
          style={{
            ...styles.imglogo,
            marginBottom: getSize.m(5),
            marginRight: getSize.m(5),
          }}
        />
      </Pressable>
    );
  };

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
            <Block flex wrap row>
              {image?.map(renderImage)}
            </Block>
          </Fragment>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemFeedBack;
