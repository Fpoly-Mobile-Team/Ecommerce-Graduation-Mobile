import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnOutline: {
    width: 100,
    borderColor: theme.colors.black,
    borderWidth: 1,
  },
  label: {
    color: theme.colors.lightGray,
    paddingHorizontal: 20,
  },
  containText: {
    fontWeight: 'bold',
  },
});
