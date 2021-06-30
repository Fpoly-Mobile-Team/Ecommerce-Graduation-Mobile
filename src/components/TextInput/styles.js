import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    height: getSize.v(45),
    width: width,
  },
  iconLeft: {
    height: getSize.s(15),
    width: getSize.s(15),
    marginRight: getSize.m(10),
  },
  icoWarning: {
    tintColor: theme.colors.red,
    height: getSize.s(11),
    width: getSize.s(11),
  },
});
