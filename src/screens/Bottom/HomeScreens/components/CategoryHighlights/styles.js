import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgicon: {
    width: width / 8,
    height: width / 8,
    marginBottom: getSize.m(5),
    // borderRadius: getSize.s(450),
  },
});
