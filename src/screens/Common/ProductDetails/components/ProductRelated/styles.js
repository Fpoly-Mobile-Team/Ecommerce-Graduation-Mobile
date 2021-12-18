import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconnext: {
    width: getSize.s(12),
    height: getSize.s(12),
    marginLeft: getSize.m(2),
    tintColor: theme.colors.pink,
    marginTop: getSize.m(3),
  },
  styleitem: {
    margin: getSize.m(6),
  },
});
