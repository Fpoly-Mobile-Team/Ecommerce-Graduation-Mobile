import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: width,
    width: width * 0.7,
    borderTopLeftRadius: getSize.s(20),
    borderTopRightRadius: getSize.s(20),
  },
  Button: {
    backgroundColor: theme.colors.white,
    height: getSize.s(35),
    width: getSize.s(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getSize.s(35 / 2),
    position: 'absolute',
    right: -15,
    top: -15,
  },
  image_close: {width: getSize.s(15), height: getSize.s(15)},
});
