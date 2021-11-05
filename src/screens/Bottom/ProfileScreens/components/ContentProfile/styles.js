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
    width: getSize.s(10),
    height: getSize.s(10),
    tintColor: theme.colors.gray,
  },
  iconBill: config => ({
    width: getSize.s(25),
    height: getSize.s(25),
    tintColor: config || theme.colors.pink,
  }),
});
