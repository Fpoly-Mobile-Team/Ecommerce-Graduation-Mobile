import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const LazyImage = ({thumbnailSource, source, resizeMode, style}) => {
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);
  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        source={thumbnailSource}
        style={[style, {opacity: thumbnailAnimated}]}
        resizeMode={resizeMode}
        onLoad={handleThumbnailLoad}
        blurRadius={2}
      />
      <Animated.Image
        source={source}
        style={[styles.imageOverlay, {opacity: imageAnimated}, style]}
        resizeMode={resizeMode ? resizeMode : 'cover'}
        onLoad={onImageLoad}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: 'transparent',
  },
});
export default LazyImage;
