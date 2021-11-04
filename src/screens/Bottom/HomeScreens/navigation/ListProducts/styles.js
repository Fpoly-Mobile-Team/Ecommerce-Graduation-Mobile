import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';

export default StyleSheet.create({
  style_item: index => ({
    margin: getSize.s(6),
    width: (width - 24) / 2,
  }),
});
