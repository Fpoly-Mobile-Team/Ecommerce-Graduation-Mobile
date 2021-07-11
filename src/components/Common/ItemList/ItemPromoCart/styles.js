import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btn: {
    width: 60,
    backgroundColor: theme.colors.pink,
    borderRadius: 45,
  },
});
