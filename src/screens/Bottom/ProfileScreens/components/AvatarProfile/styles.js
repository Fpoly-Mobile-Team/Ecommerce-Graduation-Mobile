import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(80),
    height: getSize.v(80),
    borderRadius: getSize.s(80 / 2),
    borderColor: theme.colors.smoke,
    borderWidth: 2,
  },
  iconCamera: {
    width: getSize.s(20),
    height: getSize.s(20),
  },
  wrapIconCamera: {
    position: 'absolute',
    bottom: getSize.m(5),
    right: getSize.m(5),
  },
});
