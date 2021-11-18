import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  paginationStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 2,
  },
  image: {
    width: width - 24,
    height: width / 3,
  },
});
