import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imglogo: {
    width: getSize.s(45),
    height: getSize.s(45),
    borderRadius: getSize.m(5),
  },
});
