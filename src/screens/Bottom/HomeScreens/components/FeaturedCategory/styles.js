import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgcategory: {
    width: '100%',
    height: getSize.s(45),
    marginBottom: 5,
  },
  stylebtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconnext: {
    width: getSize.s(10),
    height: getSize.s(10),
    marginLeft: getSize.m(2),
    marginTop: getSize.m(3),
  },
});
