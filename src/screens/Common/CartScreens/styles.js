import {theme} from '@theme';
import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerContain: {
    paddingVertical: 10,
    elevation: 2,
  },
  middleComponent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    height: '30%',
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  promo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  input: {
    height: 40,
    flex: 1,
    marginRight: 5,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  next: {
    alignItems: 'center',
  },
  buttonGroup: {
    width: width,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnOutline: {
    width: width / 2.2,
    borderColor: theme.colors.black,
    borderWidth: 1.5,
  },
  btnRounded: {
    width: width / 2.2,
    backgroundColor: theme.colors.pink,
  },
  btnCheck: {
    width: width - 24,
    backgroundColor: theme.colors.pink,
  },
});
