import {theme} from '@theme';
import {width,getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  
      inputStyle: {
        fontSize: getSize.s(14),
        marginHorizontal: 10,
        alignItems: 'center',
        height: getSize.s(40),
        color: theme.colors.placeholder,
      },
      btnCheck: {
        width: width - 24,
        backgroundColor: theme.colors.pink,
      },
    });
