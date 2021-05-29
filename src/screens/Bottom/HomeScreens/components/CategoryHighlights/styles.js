import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgicon: {
    width: width / 5,
    height: getSize.m(45),
    marginBottom: getSize.m(5),
  },
});
