import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ratings: {marginTop: getSize.m(5)},
  imglogo: {
    width: (width / 3 - getSize.m(30)),
    height: getSize.v(100),
    borderRadius: getSize.s(4),
  },
});
