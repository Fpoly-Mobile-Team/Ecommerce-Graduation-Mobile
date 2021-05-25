import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  iconback: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
});
