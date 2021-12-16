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
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: getSize.s(40),
    color: theme.colors.black,
    fontFamily: theme.fonts.fontFamily.regular,
  },
});
