import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#DB3022',
  },
  button: {},

  disabledButton: {
    backgroundColor: '$line',
  },

  labelStyle: {
    fontSize: '$mediumText',
    fontFamily: '$font1',
    textAlign: 'center',
    color: '$white',
  },
});

export default styles;
