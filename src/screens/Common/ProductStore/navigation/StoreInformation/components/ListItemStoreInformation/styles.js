import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: theme.fonts.fontWeight.medium,
  },
  item: {
    paddingBottom: 3,
    textAlign: 'center',
    alignItems: 'center',
  },
});
