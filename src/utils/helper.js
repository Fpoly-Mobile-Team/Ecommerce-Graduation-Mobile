import SimpleToast from 'react-native-simple-toast';

export const Toast = string => {
  SimpleToast.show(string);
};

export const Currency = value => {
  return `${value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} đ`;
};
