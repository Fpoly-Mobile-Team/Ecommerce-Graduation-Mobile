import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  txtunderprice: {
    textDecorationLine: 'line-through',
  },
  iconfav: {
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: theme.colors.placeholder,
  },
  radiuscouponLeft: {
    // zIndex: 999,
    // borderRadius: 6,
    // borderColor: theme.colors.pink,
    // borderTopColor: theme.colors.transparent,
    // borderLeftColor: theme.colors.transparent,
    // overflow: 'hidden',
    // transform: [
    //   {rotate: Platform.OS === 'ios' ? '-45deg' : -3.14159 / 4 + 'rad'},
    // ],
    // borderWidth: 1,
    // overflow: 'hidden',
    // borderStyle: 'solid',
  },
  radiuscouponRight: {
    zIndex: 999,
    borderRadius: 12,
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '-45deg'}],
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
