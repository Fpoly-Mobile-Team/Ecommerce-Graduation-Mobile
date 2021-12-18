import {routes} from '@navigation/routes';

export const data = [
  {
    // image: 'https://cdn-icons-png.flaticon.com/512/4940/4940877.png',
    image: 'https://media3.scdn.vn/img4/2021/05_24/aexwbElKIc9dVls08k30.png',

    title: 'Giờ vàng săn sale',
    type: 15,
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giờ vàng săn sale', percent: 0.15},
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/3787/3787324.png',
    image:
      'https://salt.tikicdn.com/ts/upload/8c/0b/c9/55173090606c99d5f348a2f47d7b8faa.png',

    title: 'Giảm 30%',
    type: 30,
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giảm 30%', percent: 0.3},
  },
  {
    // image: 'https://cdn-icons-png.flaticon.com/512/3787/3787450.png',
    image: 'https://cf.shopee.vn/file/c360d75f1605e54f07c2b30100755722_xxhdpi',
    title: 'Giảm 50%',
    type: 50,
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giảm 50%', percent: 0.5},
  },
  {
    // image: 'https://cdn-icons-png.flaticon.com/512/3787/3787447.png',
    image: 'https://cf.shopee.vn/file/6a574d8298eed44c1062a5f1408e4c2b_xxhdpi',
    title: 'Freeship Xtra',
    type: 70,
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Freeship Xtra', percent: 0.75},
  },
  {
    // image:
    //   'https://cdn-icons-png.flaticon.com/512/3787/3787271.png',
    image:
      'https://salt.tikicdn.com/ts/upload/ce/ee/fe/a8a350727b38a1e20ce1610c5162fcb7.png',

    title: 'Giao hàng 2h',
    type: 80,
    discount: routes.DISCOUNT_PRODUCTS,
    params: {title: 'Giao hàng 2h', percent: 0.9},
  },
];
