import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnOutline: {
    borderColor: theme.colors.black,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(26),
    borderWidth: 0.75,
    backgroundColor: theme.colors.white,
  },
  label: {
    color: theme.colors.lightGray,
    paddingHorizontal: 20,
  },
  containText: {
    fontWeight: 'bold',
  },
});
