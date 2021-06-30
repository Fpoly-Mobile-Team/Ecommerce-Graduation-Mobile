import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  stylebtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconnext: {
    width: getSize.s(10),
    height: getSize.s(10),
    marginLeft: getSize.m(2),
  },
  box: index => ({
    width: (width - 35) / 2,
    marginLeft: index % 2 !== 0 ? 10 : 0,
  }),
});
