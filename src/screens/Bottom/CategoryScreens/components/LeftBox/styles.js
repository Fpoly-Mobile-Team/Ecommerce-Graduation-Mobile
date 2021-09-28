import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: getSize.s(45),
    height: getSize.s(45),
    marginBottom: getSize.m(5),
    marginTop: getSize.m(5),
    borderRadius: getSize.m(5),
  },
});
