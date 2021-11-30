import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  marginInput: {
    marginBottom: getSize.m(5),
    paddingVertical: getSize.m(15),
  },
  button: {
    marginBottom: getSize.m(20),
    marginHorizontal: getSize.m(12),
  },
});
