import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, Pressable, View} from 'react-native';
import styles from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedView = Animated.createAnimatedComponent(View);

const CheckBox = ({
  title,
  value,
  setValue,
  width = 20,
  activeColor = theme.colors.green,
  containerStyles,
  labelStyles,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.stopAnimation();
    if (value) {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(1);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  }, [animatedValue, setValue, value]);

  const _onChange = () => setValue(prev => !prev);

  const borderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.smoke, activeColor],
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });

  const widthIcon = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width],
  });

  return (
    <Block style={containerStyles} row alignCenter>
      <AnimatedPressable
        style={styles.button(borderColor, scale, width)}
        onPress={_onChange}>
        <Image style={styles.icon(width)} source={icons.check_blank} />
        <AnimatedView style={styles.background(widthIcon, activeColor)} />
      </AnimatedPressable>
      <Block flex>
        <Text style={labelStyles} fontType="bold" size={15}>
          {title}
        </Text>
      </Block>
    </Block>
  );
};

export default CheckBox;
