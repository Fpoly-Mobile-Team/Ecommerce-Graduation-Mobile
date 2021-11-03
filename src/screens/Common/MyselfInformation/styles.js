import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(80),
    height: getSize.s(80),
    borderRadius: 80 / 2,
    borderWidth: 2,
  },
});
