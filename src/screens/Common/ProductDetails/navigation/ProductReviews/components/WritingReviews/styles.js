import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgShow: {
    width: getSize.s(55),
    height: getSize.v(55),
    borderRadius: getSize.s(55),
    borderColor: theme.colors.paleGreen,
    borderWidth: 2,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12,
  },
  button: {
    marginBottom: getSize.m(20),
  },
  wrapperCamera: {
    backgroundColor: theme.colors.primaryColor,
    borderRadius: getSize.s(52),
    width: getSize.s(52),
    height: getSize.v(52),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getSize.m(4),
  },
  input: {
    fontFamily: theme.fonts.fontFamily.medium,
    textAlign: 'justify',
    zIndex: getSize.m(1),
  },
  shadow: {
    shadowColor: theme.colors.black,
    borderRadius: getSize.m(5),
    elevation: getSize.m(6),
    shadowOpacity: 0.1,
    shadowOffset: {
      width: getSize.s(11),
      height: getSize.v(22),
    },
  },
});
