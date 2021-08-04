import {icons} from '@assets';
import {ChevronLeft} from '@assets/svg/common';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useIsFocused} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {Animated, Image, Pressable, StatusBar} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import styles from './styles';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = ({scroll}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const config = useSelector(state => state.config?.data);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
  const HEADER_MAX_HEIGHT = getSize.m(200);
  const HEADER_MIN_HEIGHT = getSize.m(60);
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const [dark, setDark] = useState(true);

  scroll.addListener(({value}) => {
    if (value >= 60 && dark) {
      setDark(false);
    }
    if (value < 60 && !dark) {
      setDark(true);
    }
  });

  const backgroundColor = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      config?.backgroundcolor || theme.colors.pink,
      theme.colors.white,
    ],
    extrapolate: 'clamp',
  });

  const backgroundColorbox = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.white, theme.colors.smoke],
    extrapolate: 'clamp',
  });
  const colortext = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      theme.colors.placeholder,
      config?.backgroundcolor || theme.colors.pink,
    ],
    extrapolate: 'clamp',
  });

  const colorimg = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      theme.colors.white,
      config?.backgroundcolor || theme.colors.pink,
    ],
    extrapolate: 'clamp',
  });
  const backgroundsmoke = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      config?.backgroundcolor || theme.colors.pink,
      theme.colors.smoke,
    ],
    extrapolate: 'clamp',
  });
  const isStatus = dark ? 'light-content' : 'dark-content';

  return (
    <Block>
      <AnimatedStatusBar animated={true} translucent barStyle={isStatus} />
      <Animated.View
        style={{
          ...styles.container(top, backgroundColor),
        }}>
        <Block row alignCenter marginBottom={12} space="between">
          <AnimatedPressable
            onPress={() => navigation.navigate(routes.SEARCHSCREEN)}
            style={styles.box(backgroundColorbox)}>
            <Image
              source={icons.search}
              style={styles.iconSearch}
              resizeMode="contain"
            />
            <Animated.Text
              allowFontScaling={false}
              style={{marginLeft: getSize.s(5), color: colortext}}>
              Bạn tìm gì hôm nay?
            </Animated.Text>
          </AnimatedPressable>

          <Cart colorimg={colorimg} />
        </Block>
      </Animated.View>

      <Animated.View style={styles.backgroundColorsmoke(backgroundsmoke)} />
    </Block>
  );
};

const HeaderCommon = ({canGoBack, title, checkBackground}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const config = useSelector(state => state.config?.data);

  return (
    <Block
      row
      alignCenter
      shadow
      paddingTop={top + 10}
      paddingVertical={15}
      paddingHorizontal={12}
      style={checkBackground ? styles.border : {}}
      space="between"
      backgroundColor={
        checkBackground
          ? theme.colors.white
          : config?.backgroundcolor || theme.colors.pink
      }>
      {isFocused && <StatusBar barStyle="dark-content" translucent animated />}
      {canGoBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <ChevronLeft />
        </Pressable>
      )}
      {title && (
        <Block flex alignCenter>
          <Text
            fontType="semibold"
            color={checkBackground ? theme.colors.black : theme.colors.white}
            size={18}
            numberOfLines={2}>
            {title}
          </Text>
        </Block>
      )}
    </Block>
  );
};

const Cart = ({colorimg}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.CARTSCREENS)}>
      <Block marginHorizontal={10}>
        <Badge
          status="warning"
          value="1"
          containerStyle={styles.containerStyle}
          textProps={{allowFontScaling: false}}
        />
        <Animated.Image
          source={icons.cart}
          style={{...styles.iconcard, tintColor: colorimg}}
          resizeMode="contain"
        />
      </Block>
    </Pressable>
  );
};

export default Header;
