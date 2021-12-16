import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {width: 170, height: 170},
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 13,
    color: theme.colors.lightGray,
  },
  inputStyle: config => ({
    borderBottomWidth: 0.8,
    borderColor: theme.colors.black,
    color: config?.backgroundcolor,
    paddingBottom: -20,
    fontSize: 16,
    width: width - 50,
  }),
  inputStyleFocus: config => ({
    borderBottomWidth: 1,
    borderColor: config?.backgroundcolor,
    color: config?.backgroundcolor,
    paddingBottom: -20,
    fontSize: 16,
    width: width - 50,
  }),
  btnContinue: {paddingHorizontal: 40, marginTop: 50},
});
