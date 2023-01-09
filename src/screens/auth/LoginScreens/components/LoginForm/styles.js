import {theme} from '@theme';
import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  btnOutline: {
    width: 100,
    borderColor: theme.colors.black,
    borderWidth: 1,
  },
  label: {
    marginTop: 8,
    marginLeft: 16,
    color: theme.colors.lightGray,
    fontSize: 12,
    fontWeight: '400',
    marginBottom: -8,
    zIndex: 8,
  },
  containerInputStyle: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    borderColor: theme.colors.smoke,
  },
  inputStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 0,
    height: 40,
  },
  containText: {
    fontWeight: 'bold',
  },
  textFilter: {
    color: theme.colors.lightGray,
    height: getSize.s(14),
  },
  rightStyle: {bottom: 12},
});
