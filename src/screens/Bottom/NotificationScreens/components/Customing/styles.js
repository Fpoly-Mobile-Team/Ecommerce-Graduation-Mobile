import {theme} from '@theme';
import { getSize } from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (isFocused, config) => ({
    flex: 1,
    paddingVertical: getSize.m(10),
    paddingHorizontal: getSize.m(16),
    borderRadius: getSize.s(4),
    marginHorizontal: getSize.m(10),
    backgroundColor: isFocused ? config : theme.colors.transparent,
  }),
  textStyle: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.black,
    textAlign: 'center',
    fontFamily: isFocused
      ? theme.fonts.fontFamily.bold
      : theme.fonts.fontFamily.regular,
    fontSize: getSize.m(14),
  }),
});
