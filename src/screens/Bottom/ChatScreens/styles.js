import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  searchStyle: {
    width: '95%',
    marginVertical: getSize.m(10),
    backgroundColor: '#F4F5F5',
    height: getSize.s(40),
    alignSelf: 'center',
  },
  inputStyle: {
    backgroundColor: '#F4F5F5',
    fontSize: 14,
  },
});
