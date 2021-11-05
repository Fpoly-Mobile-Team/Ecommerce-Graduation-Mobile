import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (isFocused, config) => ({
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: isFocused ? config : theme.colors.transparent,
  }),
  textStyle: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.black,
    textAlign: 'center',
    fontWeight: isFocused ? 'bold' : '500',
    fontSize: 14,
  }),
});
