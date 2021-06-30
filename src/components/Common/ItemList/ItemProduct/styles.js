import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  discount: {
    zIndex: 1,
    borderTopRightRadius: getSize.m(2),
    borderBottomRightRadius: getSize.m(2),
  },
  discountbox: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderStyle: 'solid',
    borderTopColor: '#913114',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  imgbox: {
    width: '100%',
    height: getSize.s(150),
    marginBottom: getSize.m(5),
  },
  txtunderprice: {
    textDecorationLine: 'line-through',
  },
});
