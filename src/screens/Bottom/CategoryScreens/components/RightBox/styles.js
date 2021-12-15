import {width, getSize, height} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  styleimg: {width: (width * 0.7 - 24) / 3, height: 70},
  icon_Next: {width: getSize.s(12), height: getSize.s(12)},
  box: index => ({
    width: width / 3 - 15,
    marginLeft: index % 2 !== 0 ? 15 : 0,
    paddingHorizontal: 5,
  }),
});
