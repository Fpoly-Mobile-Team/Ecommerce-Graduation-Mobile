import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  resetStyles: {
    flex: 1,
    padding: 0,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  defaultStyles: {
    fontFamily: theme.fonts.fontFamily.default,
    minHeight: getSize.m(38),
    paddingHorizontal: getSize.m(16),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderRadius: getSize.s(5),
    height: getSize.s(45),
  },
  leftIcon: {
    position: 'absolute',
    left: getSize.m(12),
    height: getSize.s(14),
    width: getSize.s(14),
  },
  rightIcon: {
    position: 'absolute',
    right: getSize.m(12),
  },
});
