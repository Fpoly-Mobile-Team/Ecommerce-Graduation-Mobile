import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
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
    alignItems: 'center',
    width: windowWidth,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: windowWidth - 55,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  next: {
    alignItems: 'center',
  },
  buttonGroup: {
    width: windowWidth,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  btnOutline: {
    width: windowWidth / 2.2,
    borderColor: 'black',
    borderWidth: 1.5,
  },
  btnRounded: {
    width: windowWidth / 2.2,
  },
  btnCheck: {
    width: windowWidth - 20,
    alignSelf: 'center',
  },
});
