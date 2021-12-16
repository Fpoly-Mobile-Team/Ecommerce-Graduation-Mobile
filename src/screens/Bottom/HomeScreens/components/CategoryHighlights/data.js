import {routes} from '@navigation/routes';

export const data = [
  {
    image: 'https://media3.scdn.vn/img4/2021/05_24/aexwbElKIc9dVls08k30.png',
    title: 'Giờ vàng săn sale',
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giờ vàng săn sale'},
  },
  {
    image:
      'https://salt.tikicdn.com/ts/upload/8c/0b/c9/55173090606c99d5f348a2f47d7b8faa.png',
    title: 'Giảm 30%',
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giảm 30%', percent: 0.3},
  },
  {
    image: 'https://cf.shopee.vn/file/c360d75f1605e54f07c2b30100755722_xxhdpi',
    title: 'Giảm 50%',
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giảm 50%', percent: 0.5},
  },
  {
    image: 'https://cf.shopee.vn/file/6a574d8298eed44c1062a5f1408e4c2b_xxhdpi',
    title: 'Freeship Xtra',
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Freeship Xtra'},
  },
  {
    image:
      'https://salt.tikicdn.com/ts/upload/ce/ee/fe/a8a350727b38a1e20ce1610c5162fcb7.png',
    title: 'Giao hàng 2h',
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giao hàng 2h'},
  },
];
