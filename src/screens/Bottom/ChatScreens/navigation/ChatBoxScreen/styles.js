import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(30),
    height: getSize.s(30),
    borderRadius: getSize.s(3),
  },
});
