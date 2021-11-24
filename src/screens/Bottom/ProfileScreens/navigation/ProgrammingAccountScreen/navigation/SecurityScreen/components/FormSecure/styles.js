import {theme} from '@theme';
import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  label: {
    marginTop: getSize.m(8),
    marginLeft: getSize.m(16),
    color: theme.colors.lightGray,
    fontSize: getSize.m(12),
    fontWeight: '400',
    marginBottom: getSize.m(-8),
    zIndex: 8,
  },
  containerInputStyle: {
    borderRadius: getSize.m(5),
    backgroundColor: 'white',
    borderWidth: getSize.m(1),
    marginBottom: getSize.m(10),
    borderColor: theme.colors.smoke,
  },
  inputStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 0,
    height: getSize.v(40),
  },
  rightStyle: {bottom: 12},
});
