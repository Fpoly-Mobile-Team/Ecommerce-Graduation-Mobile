import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  button: (isCheck, config) => ({
    borderBottomColor: isCheck ? config?.backgroundcolor : theme.colors.smoke,
    borderBottomWidth: 2,
  }),
});
