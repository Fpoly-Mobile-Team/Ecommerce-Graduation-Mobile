import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  images: {
    width: '27%', 
    height: getSize.s(70), 
    resizeMode: 'contain'
  },
});
