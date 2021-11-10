import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  txtunderprice: {
    textDecorationLine: 'line-through',
  },
  iconfav: isCheck => ({
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: isCheck ? theme.colors.red : theme.colors.placeholder,
  }),

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
