import {StyleSheet, StatusBar} from 'react-native';
export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    elevation: 10,
  },
  ellipsis: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  img: {
    width: 130,
    height: 130,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  status: {
    fontSize: 12,
    color: 'gray',
  },
  contentStatus: {
    fontSize: 12,
    color: 'black',
  },
  bottomItem: {
    justifyContent: 'space-between',
  },
  touch: {
    borderRadius: 20,
    elevation: 8,
  },
});
