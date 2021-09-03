import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnCheck: {
    width: width - 24,
    backgroundColor: theme.colors.pink,
    borderRadius: 5,
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
});
