import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(56),
    height: getSize.s(56),
    borderRadius: getSize.s(100) / 2,
    borderWidth: 0.5,
  },
});
