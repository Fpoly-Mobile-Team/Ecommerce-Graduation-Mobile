import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  img: {
    width: getSize.s(80),
    height: getSize.s(80),
    borderRadius: getSize.s(5),
    marginLeft: getSize.m(5)
  },
  box_frist: {
    borderTopLeftRadius: getSize.s(5),
    borderTopRightRadius: getSize.s(5),
  },
  box_end: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  txtunderprice: {
    textDecorationLine: 'line-through',
  },
  icon: width => ({
    width: getSize.s(width - 5),
    height: getSize.s(width - 5),
    tintColor: theme.colors.white,
    resizeMode: 'contain',
    zIndex: 20,
  }),
});
