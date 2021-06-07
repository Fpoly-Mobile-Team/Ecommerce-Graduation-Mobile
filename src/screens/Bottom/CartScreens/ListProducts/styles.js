import {StyleSheet, StatusBar} from 'react-native';
export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  ellipsis: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgLeft: {
    flexDirection: 'row',
  },
  img: {
    justifyContent: 'flex-start',
    width: 150,
    height: 150,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  Card: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'space-between',
  },
  fomat1: {
    fontSize: 15,
    color: 'black',
  },
  fomat2: {
    fontSize: 20,
    color: 'black',
  },
  closize: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  size: {
    fontSize: 15,
    color: 'black',
    paddingRight: 180,
  },
  FomatItem: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  BottomItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  touch: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 8,
    justifyContent: 'center',
    shadowRadius: 20,
  },
});
