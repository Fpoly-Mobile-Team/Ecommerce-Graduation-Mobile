import {object, string} from 'yup';

export const validation = object().shape({
  email: string()
    .email('Email không đúng định dạng')
    .required('Email không được để trống'),
  password: string()
    .min(6, 'Mật khẩu phải nhiều hơn 6 kí tự')
    .required('Mật khẩu không được để trống'),
});
