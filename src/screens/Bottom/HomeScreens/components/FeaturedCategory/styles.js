import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    width: (width - 24.5) / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgcategory: {
    width: '100%',
    height: getSize.s(45),
    marginBottom: 5,
  },
});
