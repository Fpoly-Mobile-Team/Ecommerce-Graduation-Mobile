import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {alignSelf: 'flex-end'},
  block: {flexDirection: 'row-reverse'},
  button: option => ({
    position: 'absolute',
    top: 40,
    width: '100%',
    backgroundColor: option?._id ? theme.colors.pink : theme.colors.smoke,
  }),
  buttonAdd: {
    position: 'absolute',
    top: 40,
    width: '100%',
    backgroundColor: theme.colors.pink,
  },
});
