import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    borderTopStartRadius: getSize.m(20),
    borderTopEndRadius: getSize.m(20),
  },
});
