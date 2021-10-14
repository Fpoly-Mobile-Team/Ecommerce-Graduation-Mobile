import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    width: getSize.s(20),
    height: getSize.s(20),
    borderColor: theme.colors.smoke,
    borderWidth: 1,
    borderRadius: getSize.s(5),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: getSize.s(15),
    height: getSize.s(15),
    tintColor: theme.colors.white,
  },
});
