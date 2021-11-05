import {theme} from '@theme';
import {getSize, height} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(80),
    height: getSize.s(80),
    borderRadius: 80 / 2,
    borderColor: theme.colors.smoke,
    borderWidth: 2,
  },
  iconCamera: {
    width: getSize.s(20),
    height: getSize.s(20),
  },
  wrapIconCamera: {
    position: 'absolute',
    bottom: getSize.m(0),
    right: getSize.m(5),
    
  },
});
