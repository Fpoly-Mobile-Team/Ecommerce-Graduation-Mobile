import {object, string} from 'yup';
const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export const validation = object().shape({
  name: string().required('Họ và tên không được để trống'),
  phone: string()
    .required('Số điện thoại không được để trống')
    .matches(phoneRegex, 'Số điện thoại không đúng định dạng'),
  street: string().required('Tên đường, Toà nhà, Số nhà không được để trống'),
});
