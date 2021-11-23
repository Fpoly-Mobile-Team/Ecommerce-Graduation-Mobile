import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: getSize.s(92),
    height: getSize.s(92),
    borderRadius: getSize.s(92),
    borderColor: theme.colors.lightGray,
    borderWidth: 1.5,
  },
});
