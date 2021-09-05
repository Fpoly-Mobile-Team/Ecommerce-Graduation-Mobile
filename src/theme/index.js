import {Platform} from 'react-native';

export const theme = {
  colors: {
    text: '#242424',
    background: '#f9f9f9',
    orange: '#FE930F',
    lightGray: '#A5A5A5',
    gray: '#424242',
    smoke: '#E6E6E6',
    white: '#ffffff',
    black: '#000000',
    placeholder: '#707070',
    blue: '#0d5cb6',
    red: '#E83625',
    gradient: ['#F04831', '#E73222', '#D9100C'],
    green: '#088A08',
    lightGreen: '#29bb89',
    yellow: '#FFDF00',
    dark: '#00000060',
    pink: '#DB3022',
    sell: '#ff5555',
    pinkholder: '#ffc9c9',
    silver: '#C0C0C0',
    greenStatus: '#2AA952',
    transparent: '#efefef00',
    bgiconheader: '#24242480',
    lightRount: '#EFEFEF',
    purple: '#9966CC',
    switchOn: '#f04141',
    switchOff: '#f3adad',
    bgSwitch: '#f3f3f3',
  },

  fonts: {
    fontWeight: {
      heavy: '700',
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
      light: '300',
    },
    fontFamily: {
      default: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
  },
};
