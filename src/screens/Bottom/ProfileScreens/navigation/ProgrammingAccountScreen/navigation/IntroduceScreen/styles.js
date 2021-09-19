import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  box: {borderTopStartRadius: getSize.s(20)},
  image: {alignSelf: 'center'},
});
