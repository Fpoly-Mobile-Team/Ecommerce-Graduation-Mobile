import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  photos: {
    width: getSize.s(200),
    height: getSize.v(200),
    resizeMode: 'contain'
  },
  button: {
    marginBottom: getSize.m(20),
    marginHorizontal: getSize.m(12),
  },
});
