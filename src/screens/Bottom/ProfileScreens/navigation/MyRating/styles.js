import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  wrapItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: getSize.m(16),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.s(8),
    backgroundColor: theme.colors.white,
  },
  imageShop: {
    width: getSize.s(60),
    height: getSize.v(60),
    borderRadius: getSize.s(60),
  },
  shadow: {
    shadowRadius: getSize.m(8),
    shadowColor: theme.colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: getSize.s(20),
      height: getSize.v(20),
    },
    elevation: getSize.m(8),
  },
});
