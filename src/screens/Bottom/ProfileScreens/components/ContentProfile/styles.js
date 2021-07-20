import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    width: getSize.s(24),
    height: getSize.s(24),
    marginRight: getSize.m(10),
  },
  iconArrow: {
    width: getSize.s(14),
    height: getSize.s(14),
    tintColor: theme.colors.gray,
  },
  iconBill: {
    width: getSize.s(25),
    height: getSize.s(25),
    tintColor: theme.colors.pink,
  },
});
