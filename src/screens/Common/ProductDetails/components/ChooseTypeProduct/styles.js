import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.pink,
    borderRadius: getSize.s(5),
  },
  iconMessage: {
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: '#3f4b53',
  },
  button: {
    width: (width - 24) * 0.5,
    backgroundColor: theme.colors.smoke,
    marginRight: 8,
  },
});
