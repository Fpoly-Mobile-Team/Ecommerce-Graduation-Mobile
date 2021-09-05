import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    width: getSize.s(20),
    height: getSize.s(20),
    borderRadius: getSize.s(20),
    borderColor: theme.colors.switchOn,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnchild: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: theme.colors.pink,
  },
});
