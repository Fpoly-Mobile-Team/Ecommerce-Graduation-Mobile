import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgPromotion: {
    width: getSize.s(20),
    height: getSize.v(20)
  },
  imgImages: {
    width: getSize.s(40),
    height: getSize.v(40),
    borderRadius: getSize.s(4)
  },
});
