import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: isFocused => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isFocused ? theme.colors.pink : theme.colors.transparent,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 7,
    margin: 6,
  }),
  textStyle: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.black,
  }),
});
