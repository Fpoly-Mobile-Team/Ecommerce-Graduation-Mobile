import {StyleSheet, StatusBar} from 'react-native';
export default StyleSheet.create({
  mainBody: {
    flex: 1,
    paddingTop: 10,
  },
  TopSearch: {
    alignSelf: 'stretch',
    height: 60,
    flexDirection: 'row', // row
    alignItems: 'flex-end',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
  CartTitle: {
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 10,
    fontFamily: 'Arial Hebrew',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  Amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  Promo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    width: '90%',
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  next: {
    alignItems: 'center',
  },
  Check: {
    fontSize: 20,
    width: 350,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    borderRadius: 30,
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#DB3022',
  },
});
