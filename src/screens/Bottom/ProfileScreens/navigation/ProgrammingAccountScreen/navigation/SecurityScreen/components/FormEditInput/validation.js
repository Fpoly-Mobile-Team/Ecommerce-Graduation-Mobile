import {object, string, ref} from 'yup';
const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export const validation = object().shape({
  username: string().required('Họ và tên không được để trống'),
  phone: string()
    .required('Số điện thoại không được để trống')
    .matches(phoneRegex, 'Số điện thoại không đúng định dạng'),
  email: string()
    .email('Email không đúng định dạng')
    .required('Email không được để trống'),

  password: string()
    .min(6, 'Mật khẩu phải nhiều hơn 6 kí tự')
    .required('Mật khẩu không được để trống'),
  confirmpassword: string().oneOf(
    [ref('password'), null],
    'Mật khẩu không trùng khớp',
  ),
});
