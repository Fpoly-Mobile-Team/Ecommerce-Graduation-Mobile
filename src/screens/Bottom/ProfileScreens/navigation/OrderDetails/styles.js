import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  btnStyle: {
    marginHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginBottom: getSize.s(20),
  },
});
