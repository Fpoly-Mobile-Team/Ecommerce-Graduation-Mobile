import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rbStyle: {
    height: getSize.m(13),
    width: getSize.m(13),
    borderWidth: 1.2,
    borderColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
