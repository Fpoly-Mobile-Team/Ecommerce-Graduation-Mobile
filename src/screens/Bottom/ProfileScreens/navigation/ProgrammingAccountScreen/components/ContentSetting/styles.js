import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  iconArrow: {
    width: getSize.s(10),
    height: getSize.s(10),
    tintColor: theme.colors.gray,
  },
  button: {
    marginBottom: getSize.s(20),
  },
});
