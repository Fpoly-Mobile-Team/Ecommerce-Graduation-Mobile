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
    image: icons.start_selling,
    title: 'Bắt đầu bán',
    navigation: routes.START_SELLING,
  },
  {
    id: '4',
    image: icons.favoriteprofile,
    title: 'Yêu thích',
    navigation: routes.FAVORITE_SCREEN,
  },
  {
    id: '5',
    image: icons.vouncher,
    title: 'Voucher của tôi',
    navigation: routes.MY_VOUCHERS,
  },
  {
    id: '6',
    image: icons.eyesview,
    title: 'Đã xem gần đây',
    navigation: routes.VIEW_PRODUCTS,
  },
  {
    id: '7',
    image: icons.feedback,
    title: 'Đánh giá',
    navigation: routes.MY_RATING,
  },
  {
    id: '8',
    image: icons.accountprofile,
    title: 'Thiết lập tài khoản',
    navigation: routes.PROGRAMMING_ACCOUNT_SCREEN,
  },
];

export const DATABILL = [
  {
    id: '1',
    title: 'Đang xử lý',
    image: icons.wallet,
  },

  {
    id: '2',
    image: icons.delivery,
    title: 'Đang giao',
  },
  {
    id: '3',
    image: icons.delivery_box,
    title: 'Giao thành công',
  },
  {
    id: '4',
    image: icons.confirmation,
    title: 'Đã huỷ',
  },
];
