import {icons} from '@assets';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {Animated, Image, Pressable, StatusBar} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = ({scroll}) => {
  const {top} = useSafeAreaInsets();

  const HEADER_MAX_HEIGHT = getSize.m(200);
  const HEADER_MIN_HEIGHT = getSize.m(60);
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const [check, setCheck] = useState(false);

  scroll.addListener(({value}) => {
    if (value >= 60) {
      setCheck(true);
      StatusBar.setBarStyle('dark-content');
    } else {
      setCheck(!check);
      StatusBar.setBarStyle('light-content');
    }
  });

  const backgroundColor = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.pink, theme.colors.white],
    extrapolate: 'clamp',
  });

  const backgroundColorbox = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.white, theme.colors.smoke],
    extrapolate: 'clamp',
  });
  const colortext = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.placeholder, theme.colors.pink],
    extrapolate: 'clamp',
  });

  const colorimg = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.white, theme.colors.pink],
    extrapolate: 'clamp',
  });

  return (
    <Block>
      <StatusBar translucent barStyle="light-content" />
      <Animated.View
        style={{
          ...styles.container(top, backgroundColor),
        }}>
        <Block row alignCenter marginBottom={12} space="between">
          <Animated.View
            style={styles.box(backgroundColorbox)}
            flex
            row
            alignCenter
            backgroundColor={theme.colors.white}
            height={40}
            radius={5}
            paddingHorizontal={12}>
            <Animated.Image
              source={icons.search}
              style={styles.iconSearch}
              resizeMode="contain"
            />
            <Animated.Text
              allowFontScaling={false}
              style={{marginLeft: getSize.s(5), color: colortext}}>
              Bạn tìm gì hôm nay?
            </Animated.Text>
          </Animated.View>
          <Card colorimg={colorimg} />
        </Block>
      </Animated.View>
    </Block>
  );
};

const HeaderCommon = ({canGoBack, title}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Block
      row
      alignCenter
      paddingTop={top + 10}
      paddingVertical={16}
      paddingHorizontal={12}
      space="between"
      backgroundColor={theme.colors.pink}>
      {canGoBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.iconback} />
        </Pressable>
      )}
      {title && (
        <Block flex alignCenter>
          <Text
            fontType="semibold"
            color={theme.colors.white}
            size={16}
            numberOfLines={2}>
            {title}
          </Text>
        </Block>
      )}
    </Block>
  );
};

const Card = ({colorimg}) => {
  return (
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
  );
};

export default Header;
