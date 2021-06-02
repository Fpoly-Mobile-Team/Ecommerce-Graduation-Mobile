import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgbackground: {
    width: width - 24,
    marginHorizontal: getSize.m(12),
  },
  imageStyle: {borderRadius: getSize.m(10)},
  styleflash: {width: getSize.s(89), height: getSize.s(28)},
  iconnext: {
    width: getSize.s(10),
    height: getSize.s(10),
    marginLeft: getSize.m(2),
    tintColor: theme.colors.white,
  },
  stylebtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
