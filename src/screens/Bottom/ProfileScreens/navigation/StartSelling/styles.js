import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  photos: {
    width: getSize.s(200),
    height: getSize.v(200),
    borderRadius: getSize.s(200),
  },
  button: {
    marginBottom: getSize.m(20),
    marginHorizontal: getSize.m(12),
  },
});
