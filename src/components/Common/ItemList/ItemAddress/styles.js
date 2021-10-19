import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    width: getSize.s(18),
    height: getSize.s(18),
    tintColor: 'red',
  },
});
