import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: config => ({
    width: getSize.s(20),
    height: getSize.s(20),
    borderRadius: getSize.s(20),
    borderColor: config,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  btnchild: config => ({
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: config,
  }),
});
