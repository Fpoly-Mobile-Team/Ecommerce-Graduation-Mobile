import {theme} from '@theme';
import {getSize, height} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconCamera: {
    width: getSize.s(20),
    height: getSize.s(20),
  },
  wrapIconCamera: {
    position: 'absolute',
    bottom: getSize.m(0),
    right: getSize.m(5),
  },
  modalContainer: {
    backgroundColor: theme.colors.white,
    marginTop: height - 250,
    borderTopStartRadius: getSize.m(20),
    borderTopEndRadius: getSize.m(20),
  },
});
