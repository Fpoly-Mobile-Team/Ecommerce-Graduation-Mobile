import {icons} from '@assets';
import {routes} from '@navigation/routes';

export const DATA = [
  {
    id: '1',
    title: 'Đơn Hàng Của Tôi',
    navigation: routes.ORDERHISTORY,
  },
  {
    id: '2',
    image: icons.vouncher,
    title: 'Vouncher của tôi',
    navigation: null,
  },
  {
    id: '3',
    image: icons.shopping,
    title: 'Mua sau',
    navigation: null,
  },
  {
    id: '4',
    image: icons.favoriteprofile,
    title: 'Yêu thích',
    navigation: null,
  },
  {
    id: '5',
    image: icons.eyesview,
    title: 'Đã xem gần đây',
    navigation: null,
  },
  {
    id: '6',
    image: icons.feedback,
    title: 'Đánh giá',
    navigation: null,
  },
  {
    id: '7',
    image: icons.accountprofile,
    title: 'Thiết lập tài khoản',
    navigation: null,
  },
];

export const DATABILL = [
  {
    id: '1',
    title: 'Đang xử lý',
    image: icons.wallet,
    navigation: null,
  },
  {
    id: '2',
    image: icons.confirmation,
    title: 'Đã xác nhận',
    navigation: null,
  },
  {
    id: '3',
    image: icons.delivery,
    title: 'Đang giao',
    navigation: null,
  },
  {
    id: '4',
    image: icons.delivery_box,
    title: 'Giao thành công',
    navigation: null,
  },
];
