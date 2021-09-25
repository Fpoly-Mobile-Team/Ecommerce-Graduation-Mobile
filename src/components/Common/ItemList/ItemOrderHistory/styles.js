import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnOutline: {
    width: getSize.s(100),
    borderColor: theme.colors.black,
    borderWidth: 1,
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
