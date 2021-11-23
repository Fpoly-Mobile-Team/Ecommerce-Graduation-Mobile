import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  img: {
    width: getSize.s(80),
    height: getSize.s(80),
    borderRadius: getSize.s(5),
  },
  box_frist: {
    borderTopLeftRadius: getSize.s(5),
    borderTopRightRadius: getSize.s(5),
  },
  box_end: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  txtunderprice: {
    textDecorationLine: 'line-through',
  },
});
