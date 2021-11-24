import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  ItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#E9EAEB',
    marginTop: 10,
  },
  ItemCart: {
    width: '100%',
    height: getSize.s(130),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  imglogo: {
    width: getSize.s(50),
    height: getSize.s(50),
    borderRadius: getSize.s(50),
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
  box: {
    width: '20%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxLeft: {width: '80%', height: '100%', borderRadius: 8},
  txtTitle: {fontWeight: '500', fontSize: 14, marginTop: 5},
  dash: {marginHorizontal: 22},
  button: {
    backgroundColor: theme.colors.pink,
    borderRadius: getSize.s(4),
    marginRight: getSize.s(16),
    marginBottom: getSize.s(16),
  },
});
