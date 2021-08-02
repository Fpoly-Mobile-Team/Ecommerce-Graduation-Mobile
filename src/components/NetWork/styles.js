import {theme} from '@theme';
import {getSize, height, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'absolute',
    backgroundColor: theme.colors.bg_opacity,
    paddingBottom: getSize.m(50),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textWrap: {
    backgroundColor: theme.colors.gray,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(15),
    borderRadius: getSize.m(5),
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
