import {theme} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: config => ({
    borderBottomWidth: 2,
    borderColor: config?.backgroundcolor,
    marginHorizontal: 10,
    paddingBottom: 0,
  }),
  textInputStyle: {
    textAlign: 'center',
    padding: -10,
    fontWeight: 'bold',
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
