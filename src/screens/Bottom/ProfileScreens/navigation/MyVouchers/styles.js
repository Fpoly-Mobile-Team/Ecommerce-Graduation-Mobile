import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    width: getSize.s(10),
    height: getSize.s(12),
    resizeMode: 'contain',
    tintColor: '#8B9399',
  },
});
