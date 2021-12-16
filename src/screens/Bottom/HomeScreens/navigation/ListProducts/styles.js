import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';

export default StyleSheet.create({
  style_item: index => ({
    margin: getSize.s(6),
    width: (width - 24) / 2,
  }),
  box: index => ({
    width: width / 3 - 15,
    marginLeft: index % 2 !== 0 ? 15 : 0,
    paddingHorizontal: 5,
  }),
});
