import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  ItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#E9EAEB',
  },
  ItemCart: {
    width: '100%',
    height: 130,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  imglogo: {
    width: getSize.s(40),
    height: getSize.s(40),
  },
  ItemIconRight: {
    position: 'absolute',
    right: -20,
    width: 30,
    height: 30,
    borderRadius: 25,
    top: 62,
    backgroundColor: '#E9EAEB',
  },
  ItemIconLeft: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 25,
    left: -20,
    top: 62,
    backgroundColor: '#E9EAEB',
  },
  ItemTop: {
    width: '100%',
    height: '60%',
    // borderRadius: 8,
    flexDirection: 'row',
  },
  ItemBottom: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemText: {
    flexDirection: 'row',
    paddingHorizontal: 21,
    paddingVertical: 16,
  },
  textDate: {
    fontSize: 13,
    color: theme.colors.placeholder,
  },
});
