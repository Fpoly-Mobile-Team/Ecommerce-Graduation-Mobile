import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useState} from 'react';
import {Animated, Pressable} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const HeaderDetails = ({scroll}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const HEADER_MAX_HEIGHT = getSize.m(100);
  const HEADER_MIN_HEIGHT = getSize.m(60);
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const [title, setTitle] = useState();

  scroll.addListener(({value}) => {
    if (value >= 40) {
      setTitle('Điện Thoại Vsmart Live 4 (6GB/64GB) - Hàng Chính Hãng');
    } else {
      setTitle('');
    }
  });

  const backgroundColor = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.transparent, theme.colors.white],
    extrapolate: 'clamp',
  });
  const backgroundIcon = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.bgiconheader, theme.colors.white],
    extrapolate: 'clamp',
  });
  const ColorIcon = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [theme.colors.white, theme.colors.pink],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={styles.headercontainer(top, backgroundColor)}>
      <Block
        row
        alignCenter
        paddingHorizontal={12}
        paddingVertical={5}
        space="between">
        <_renderIcon
          ColorIcon={ColorIcon}
          backgroundIcon={backgroundIcon}
          icon={icons.back}
          onPress={() => navigation.goBack()}
        />
        <Block row alignCenter>
          <Block row alignCenter width={width - 54} space="between">
            <Block flex alignCenter paddingHorizontal={5}>
              <Text
                numberOfLines={1}
                size={18}
                color={theme.colors.black}
                fontType="semibold">
                {title}
              </Text>
            </Block>

            <Block row alignCenter>
              <_renderIcon
                ColorIcon={ColorIcon}
                backgroundIcon={backgroundIcon}
                icon={icons.share}
                onPress={() => navigation.goBack()}
              />
              <_renderIcon
                ColorIcon={ColorIcon}
                backgroundIcon={backgroundIcon}
                cart
                style={styles.iconcart}
                icon={icons.cart}
                onPress={() => navigation.navigate(routes.CARTSCREENS)}
              />
              <_renderIcon
                ColorIcon={ColorIcon}
                backgroundIcon={backgroundIcon}
                icon={icons.menu}
                onPress={() => navigation.goBack()}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </Animated.View>
  );
};

const _renderIcon = ({
  icon,
  onPress,
  style,
  cart,
  backgroundIcon,
  ColorIcon,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Animated.View style={{...styles.styleBoxicon(backgroundIcon), ...style}}>
        {cart && (
          <Badge
            status="warning"
            value="1"
            containerStyle={styles.containerStyle}
            textProps={{allowFontScaling: false}}
          />
        )}

        <Animated.Image
          source={icon}
          style={styles.imgicon(ColorIcon)}
          resizeMode="contain"
        />
      </Animated.View>
    </Pressable>
  );
};

export default HeaderDetails;
