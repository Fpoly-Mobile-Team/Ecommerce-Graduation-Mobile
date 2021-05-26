import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  stylebtn: {width: width * 0.8, borderRadius: getSize.m(5)},
  iconbell: {
    width: getSize.s(120),
    height: getSize.s(120),
    resizeMode: 'contain',
  },
});
