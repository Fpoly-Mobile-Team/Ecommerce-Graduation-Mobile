import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  borderBottom: {
    borderBottomEndRadius: getSize.m(100 / 2),
    borderBottomStartRadius: getSize.m(100 / 2),
  },
  wrapperTextVoucher: {
    flexDirection: 'row'
  },
});
