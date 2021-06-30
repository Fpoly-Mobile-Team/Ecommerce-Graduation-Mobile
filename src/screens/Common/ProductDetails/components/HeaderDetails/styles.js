import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgicon: color => ({
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: color,
  }),
  containerStyle: {
    position: 'absolute',
    zIndex: 999,
    top: getSize.m(-5),
    right: getSize.m(-5),
  },
  headercontainer: (top, backgroundColor) => ({
    zIndex: 999,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    paddingTop: top + 10,
    paddingVertical: 16,
    backgroundColor: backgroundColor,
  }),
  iconcart: {marginHorizontal: getSize.m(10)},
  styleBoxicon: backgroundColor => ({
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getSize.s(30 / 2),
    height: getSize.s(30),
    width: getSize.s(30),
    backgroundColor: backgroundColor,
  }),
});
