import {number, object, string} from 'yup';
const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export const validation = object().shape({
  email: string()
    .email('Email không đúng định dạng')
    .required('Email không được để trống'),
  username: string()
    .min(8, 'Họ và tên không chính xác mời nhập lại')
    .required('Họ và tên không được để trống'),
  phone: string()
    .required('Số điện thoại không được để trống')
    .matches(phoneRegex, 'Số điện thoại không đúng định dạng'),
  password: string()
    .min(6, 'Mật khẩu phải nhiều hơn 6 kí tự')
    .required('Mật khẩu không được để trống'),
  confirmpassword: string().test(
    'Mật khẩu khớp',
    'Xác nhận mật khẩu không trùng khớp',
    function (value) {
      return this.parent.password === value;
    },
  ),
});
