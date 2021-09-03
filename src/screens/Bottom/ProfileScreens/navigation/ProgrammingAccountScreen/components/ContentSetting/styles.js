import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  iconArrow: {
    width: getSize.s(14),
    height: getSize.s(14),
    tintColor: theme.colors.gray,
  },
  button: {
    borderRadius: 5,
    marginBottom: 20,
  },
});
