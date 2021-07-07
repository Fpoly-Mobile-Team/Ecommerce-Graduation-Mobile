import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconnext: {
    width: getSize.s(12),
    height: getSize.s(12),
    marginLeft: getSize.m(2),
    tintColor: theme.colors.pink,
  },
  styleitem: {
    margin: getSize.m(6),
  },
  avatarShop: {
    width: getSize.s(65),
    height: getSize.s(65),
    borderRadius: 65,
  },
  iconLocation: {
    width: getSize.s(12),
    height: getSize.s(12),
    tintColor: theme.colors.lightGray,
  },
  btn: {
    height: getSize.s(30),
    borderRadius: 3,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: theme.colors.pink,
  },
});
