import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconback: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  containerStyle: {
    position: 'absolute',
    zIndex: 1,
    top: getSize.m(-7),
    right: getSize.m(-10),
  },
  iconcard: {
    width: getSize.s(24),
    height: getSize.s(24),
    tintColor: theme.colors.white,
  },
  iconSearch: {
    width: getSize.s(20),
    height: getSize.s(20),
    tintColor: theme.colors.placeholder,
  },
  box: backgroundColorbox => ({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: backgroundColorbox,
    borderRadius: 5,
    paddingHorizontal: 12,
    height: getSize.m(40),
  }),
  container: (top, backgroundColor) => ({
    paddingTop: top + 10,
    paddingHorizontal: getSize.m(12),
    backgroundColor: backgroundColor,
  }),
});
