import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: isFocused => ({
    width: (width - 24) / 3.1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: isFocused ? theme.colors.pink : theme.colors.transparent,
  }),
  textStyle: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.black,
    textAlign: 'center',
    fontWeight: isFocused ? 'bold' : 'regular',
    fontSize: 14,
  }),
});
