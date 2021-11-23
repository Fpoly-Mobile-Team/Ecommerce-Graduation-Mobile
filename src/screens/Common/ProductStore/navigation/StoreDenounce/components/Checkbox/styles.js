import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rbStyle: {
    height: getSize.m(17),
    width: getSize.m(17),
    borderWidth: 1.5,
    borderColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
