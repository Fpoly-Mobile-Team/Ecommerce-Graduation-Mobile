import {theme} from '@theme';
import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  btnOutline: {
    width: 100,
    borderColor: theme.colors.black,
    borderWidth: 1,
  },
  label: {
    fontSize: getSize.s(13),
    marginHorizontal: getSize.s(-4),
    alignItems: 'center',
    height: getSize.s(35),
    color: theme.colors.black,
  },
  containText: {
    fontWeight: 'bold',
  },
  textFilter: {
    color: theme.colors.lightGray,
    height: getSize.s(12),
  },
});
