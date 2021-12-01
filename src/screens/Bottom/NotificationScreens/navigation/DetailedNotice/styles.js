import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  photos: {
    width: getSize.s(125),
    height: getSize.v(125),
    borderRadius: getSize.s(125),
  },
  photosImages: {
    width: width / 2 - 44,
    height: width / 2 - 44,
    borderRadius: getSize.s(5),
  },
});
