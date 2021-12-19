import {width, getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  paginationStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 2,
  },
  image: {
    width: width - getSize.m(24.3),
    height: width / 3,
    resizeMode: 'contain',
  },
});
