import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    zIndex: 1,
    top: getSize.m(-7),
    right: getSize.m(-10),
  },
  iconcart: {
    width: getSize.s(24),
    height: getSize.s(24),
    tintColor: theme.colors.white,
  },

  avatar: {
    width: getSize.s(100),
    height: getSize.s(100),
    borderRadius: 100 / 2,
    borderColor: theme.colors.smoke,
    borderWidth: 2,
  },
  iconCamera: {
    width: getSize.s(20),
    height: getSize.s(20),
    position: 'absolute',
    bottom: getSize.m(5),
    right: getSize.m(10),
  },
});
