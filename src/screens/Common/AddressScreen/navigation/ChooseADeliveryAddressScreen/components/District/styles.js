import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputStyle: {
    marginTop: getSize.s(10),
    marginHorizontal: getSize.s(18),
    backgroundColor: theme.colors.smoke,
    borderWidth: 0,
    borderRadius: getSize.s(45),
  },
});
