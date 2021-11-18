import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    height: getSize.s(110),
    width: getSize.s(110),
    marginBottom: getSize.m(20),
  },
  button: {
    marginTop: getSize.m(15),
    paddingVertical: getSize.m(10),
    paddingHorizontal: getSize.m(15),
    borderRadius: getSize.m(5),
  },
  lottie: {
    height: getSize.s(120),
    width: getSize.s(120),
    marginBottom: getSize.m(20),
  },
});
