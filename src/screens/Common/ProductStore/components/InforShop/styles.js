import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconAvatar: {
    width: getSize.s(55),
    height: getSize.s(55),
    borderRadius: getSize.s(55),
    borderColor: theme.colors.white,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
