import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: isFocused => ({
    flex: 1,
    width: (width - 24) / 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: isFocused ? theme.colors.pink : theme.colors.transparent,
  }),
  textStyle: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.black,
    textAlign: 'center',
    fontWeight: isFocused ? 'bold' : '500',
    fontSize: 14,
  }),
});
