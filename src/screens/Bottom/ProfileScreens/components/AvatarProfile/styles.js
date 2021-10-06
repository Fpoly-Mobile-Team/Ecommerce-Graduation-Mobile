import {theme} from '@theme';
import {getSize, height} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(80),
    height: getSize.s(80),
    borderRadius: 80 / 2,
    borderColor: theme.colors.smoke,
    borderWidth: 2,
  },
  iconCamera: {
    position: 'absolute',
    width: getSize.s(20),
    height: getSize.s(20),
    bottom: getSize.m(5),
    left: getSize.m(20),
  },
  modalContainer: {
    backgroundColor: theme.colors.white,
    marginTop: height / 2 + 190,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});
