import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(80),
    height: getSize.v(80),
    borderRadius: getSize.s(100) / 2,
    borderWidth: 0.5,
  },
});
