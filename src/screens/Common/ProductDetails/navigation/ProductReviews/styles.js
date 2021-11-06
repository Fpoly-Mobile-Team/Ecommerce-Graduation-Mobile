import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapperEventAddReviews: {
    width: getSize.s(40),
    height: getSize.v(40),
    backgroundColor: theme.colors.black,
    borderRadius: getSize.s(60 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperScroll: {
    paddingHorizontal: getSize.m(12),
  },
  shadowLips: {
    shadowColor: theme.colors.black,
    elevation: 8,
    shadowOpacity: 0.2,
    shadowRadius: getSize.m(40),
    shadowOffset: {
      width: getSize.m(20),
    },
  },
  promo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});
