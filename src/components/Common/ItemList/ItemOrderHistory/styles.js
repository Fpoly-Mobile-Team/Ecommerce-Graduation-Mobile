import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnOutline: {
    width: 100,
    borderColor: theme.colors.black,
    borderWidth: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  label: {
    color: theme.colors.lightGray,
    paddingHorizontal: 20,
  },
  containText: {
    fontWeight: 'bold',
  },
});
