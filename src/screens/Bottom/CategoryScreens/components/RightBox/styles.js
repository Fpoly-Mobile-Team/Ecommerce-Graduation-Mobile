import {width, getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  styleimg: {width: (width * 0.7 - 24) / 3, height: 70},
  icon_Next: {width: getSize.s(12), height: getSize.s(12)},
});
