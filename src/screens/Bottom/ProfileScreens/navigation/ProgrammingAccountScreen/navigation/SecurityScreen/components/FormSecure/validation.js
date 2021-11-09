import {object, string, ref} from 'yup';

export const validation = object().shape({
  currentPassword: string()
    .min(6, 'Mật khẩu cũ phải nhiều hơn 6 kí tự')
    .required('Mục này không được để trống'),
  password: string()
    .min(6, 'Mật khẩu phải nhiều hơn 6 kí tự')
    .required('Mật khẩu không được để trống'),
  confirmPassword: string().oneOf(
    [ref('password'), null],
    'Mật khẩu không trùng khớp',
  ),
});
