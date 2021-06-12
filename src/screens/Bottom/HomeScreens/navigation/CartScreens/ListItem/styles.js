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
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  imgLeft: {
    flexDirection: 'row',
  },
  img: {
    justifyContent: 'flex-start',
    width: 130,
    height: 130,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  Card: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  color: {
    fontSize: 12,
    color: 'black',
  },
  amount: {
    fontSize: 15,
    color: 'black',
    paddingHorizontal: 25,
  },
  closize: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  propety: {
    flexDirection: 'row',
    marginRight: 30,
  },
  size: {
    fontSize: 12,
    color: 'black',
  },
  price: {
    paddingHorizontal: 65,
    fontSize: 15,
    color: 'black',
  },
  fomatItem: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  bottomItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
