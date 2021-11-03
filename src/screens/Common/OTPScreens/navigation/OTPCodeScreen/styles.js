import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {width: 170, height: 170},
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderBottomWidth: 1,
    textAlign: 'center',
    borderColor: theme.colors.black,
    width: 53,
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 0,
  },
  inputStyleFocus: {
    borderBottomWidth: 2,
    borderColor: theme.colors.paleGreen,
    textAlign: 'center',
    width: 53,
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 0,
  },
  btnContinue: {paddingHorizontal: 40, marginTop: 30},
});
