import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderTopEndRadius: getSize.s(10),
    borderTopStartRadius: getSize.s(10),
  },
  box: {
    borderTopStartRadius: getSize.s(20),
  },
  image: {
    alignSelf: 'center',
    width: getSize.s(110),
    height: getSize.v(110),
    resizeMode: 'contain',
  },
});
