import {theme} from '@theme';
import {StyleSheet} from 'react-native';
import { getSize } from '@utils/responsive';

export default StyleSheet.create({
  img: {
    width: getSize.s(75),
    height: getSize.v(75),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btn: {
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(24),
    borderRadius: getSize.s(45),
    backgroundColor: theme.colors.primaryColor
  },
  wrapperType: {
    borderTopLeftRadius: getSize.s(8),
    borderBottomLeftRadius: getSize.v(8),

  },
});
