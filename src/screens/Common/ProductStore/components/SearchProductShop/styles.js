import {theme} from '@theme';
import {getSize} from '@utils/responsive';
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
    height: getSize.s(35),
    color: theme.colors.black,
    fontFamily: theme.fonts.fontFamily.regular,
  },
});
