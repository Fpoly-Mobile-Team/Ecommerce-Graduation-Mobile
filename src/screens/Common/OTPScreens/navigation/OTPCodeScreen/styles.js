import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {width: 170, height: 170},
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContinue: {paddingHorizontal: 40, marginTop: 30},

  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
  },
  submitButtonText: {
    backgroundColor: theme.colors.white,
  },
});
