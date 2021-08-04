import {width as WIDTH} from '@utils/responsive';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const LinearGradientAnim = Animated.createAnimatedComponent(LinearGradient);

const Shimmer = ({
  width = WIDTH,
  height = 15,
  radius = 5,
  marginVer = 0,
  marginTop = 0,
  marginBottom = 8,
  marginLeft = 0,
  marginRight = 0,
  colors,
  style,
  children,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear.inOut,
      }),
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={[
        style,
        styles.container(
          width,
          height,
          radius,
          marginVer,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          colors,
        ),
      ]}>
      <LinearGradientAnim
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors || ['#E6E6E6', '#f5f5f5', '#f5f5f5', '#E6E6E6']}
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{translateX}],
        }}
      />
      <View>{children}</View>
    </View>
  );
};

export default Shimmer;
