import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    backgroundColor: `${theme.colors.pink}`,
    width: width / 3,
    marginVertical: 0,
  },
});
