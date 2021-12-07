import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconSearch: {
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: getSize.s(14),
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'center',
    height: getSize.s(40),
    color: theme.colors.white,
    fontFamily: theme.fonts.fontFamily.regular,
  },
});
