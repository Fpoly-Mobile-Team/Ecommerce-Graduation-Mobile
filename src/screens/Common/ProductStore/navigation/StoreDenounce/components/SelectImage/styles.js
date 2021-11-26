import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgShow: {
    width: getSize.s(55),
    height: getSize.v(55),
    borderRadius: getSize.s(55),
    borderColor: theme.colors.paleGreen,
    borderWidth: 2,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12,
  },
});
