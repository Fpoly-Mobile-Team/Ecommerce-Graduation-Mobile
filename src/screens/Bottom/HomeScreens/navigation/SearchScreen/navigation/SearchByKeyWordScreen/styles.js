import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconSearch: {
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: theme.colors.placeholder,
  },
  inputStyle: {
    fontSize: getSize.s(14),
    marginHorizontal: 5,
    alignItems: 'center',
    height: getSize.s(40),
    color: theme.colors.placeholder,
    fontFamily: theme.fonts.fontFamily.regular,
  },
  style_item: index => ({
    margin: getSize.s(6),
    width: (width - 24) / 2,
  }),
});
