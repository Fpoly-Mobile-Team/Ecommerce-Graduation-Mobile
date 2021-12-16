import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  img: {
    width: getSize.s(125),
    height: getSize.v(125),
    borderBottomLeftRadius: getSize.s(8),
    borderTopLeftRadius: getSize.s(8),
    margin: getSize.m(8),
    resizeMode: 'contain',
  },

  touch: {
    borderRadius: getSize.m(20),
    elevation: getSize.m(8),
    height: getSize.v(30),
    width: getSize.s(30),
  },
});
