import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconback: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  containerStyle: {
    position: 'absolute',
    zIndex: 1,
    top: getSize.m(-7),
    right: getSize.m(-10),
  },
  iconcard: {
    width: getSize.s(24),
    height: getSize.s(24),
    tintColor: theme.colors.white,
  },
  iconSearch: {
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: theme.colors.placeholder,
  },
});
