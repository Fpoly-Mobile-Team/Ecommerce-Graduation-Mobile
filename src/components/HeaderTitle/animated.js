import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const {width} = Dimensions.get('window');

const HeaderAnimated = ({
  heightShow,
  leftComponent,
  rightComponent,
  midComponent,
  bottomComponent,
  scrollAnimated,
  Animated,
  bottomHeight,
  hideBottomBorder,
  backgroundColor,
}) => {
  const [showView, handleShowView] = useState(false);
  /*Dimension header*/
  const WIDTH_HEADER = width;
  const HEIGHT_HEADER =
    (bottomHeight ? bottomHeight : 0) + 50 + getStatusBarHeight();

  /*Animated*/
  const headerColor = scrollAnimated.interpolate({
    inputRange: [0, heightShow ? heightShow : HEIGHT_HEADER],
    outputRange: ['transparent', '#fff'],
    extrapolate: 'clamp',
  });
  const borderBottomColor = scrollAnimated.interpolate({
    inputRange: [0, heightShow ? heightShow : HEIGHT_HEADER],
    outputRange: [
      'transparent',
      hideBottomBorder && hideBottomBorder == true ? 'transparent' : '#F4F5F5',
    ],
    extrapolate: 'clamp',
  });
  const opacity = scrollAnimated.interpolate({
    inputRange: [0, heightShow ? heightShow : HEIGHT_HEADER],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const translateWidth = scrollAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={{
        ...styles.container(WIDTH_HEADER, HEIGHT_HEADER),
        backgroundColor: backgroundColor ? backgroundColor : headerColor,
        borderBottomColor,
        width: translateWidth,
      }}>
      <Animated.View
        style={{
          paddingTop: getStatusBarHeight(),
          ...styles.content,
        }}>
        <View style={styles.left}>
          <Animated.View style={{opacity}}>{leftComponent}</Animated.View>
        </View>
        <View style={styles.mid(WIDTH_HEADER)}>
          {midComponent ? (
            <Animated.View style={{opacity}}>{midComponent}</Animated.View>
          ) : null}
        </View>
        <View style={styles.right}>
          {rightComponent ? rightComponent : null}
        </View>
      </Animated.View>
      {bottomComponent ? (
        <Animated.View style={{opacity}}>{bottomComponent}</Animated.View>
      ) : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: (WIDTH_HEADER, HEIGHT_HEADER) => ({
    width: WIDTH_HEADER,
    height: HEIGHT_HEADER,
    display: 'flex',
    position: 'absolute',
    borderBottomWidth: 1,
    zIndex: 100,
  }),
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
  },
  left: {
    justifyContent: 'center',
    width: 80,
  },
  mid: (WIDTH_HEADER) => ({
    width: WIDTH_HEADER - 160,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  right: {
    alignItems: 'flex-end',
    width: 80,
  },
});

export default HeaderAnimated;
