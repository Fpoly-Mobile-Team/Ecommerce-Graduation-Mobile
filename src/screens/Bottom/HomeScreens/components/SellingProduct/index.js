/* eslint-disable prettier/prettier */
import {icons} from '@assets';
import {Block, Text} from '@components';
import ItemProduct from '@components/Common/ItemProduct';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const data = [
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/17/6d/36/179b87629f8780608d63943662103ce4.jpg',
    title: 'Smart Tivi Casper HD 32 inch 32HX6200',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/e4/93/74/d869ef799a8b1f7625146e97f53fcf04.png',
    title:
      'Áo thun nam thể thao trơn, cổ tròn đẹp, trẻ trung, mặc thoáng mát, thấm hút tốt, đủ size 25kg-92kg (Trắng)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/86/78/40/0df5a90d7bd5d327de2d25d510dd9b65.jpg',
    title: 'Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/82/d5/05/18c7abbd948c6e5dae557244a8e3ac44.jpg',
    title: 'KHẨU TRANG Y TẾ WAKAMONO - (4 Lớp, Hộp 10 Cái)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/d3/f6/d5/9fd75deca506264412da501a2a429c65.jpg',
    title:
      'Áo thun tay lỡ nữ freesize - Áo phông form rộng dáng Unisex, mặc lớp, nhóm, cặp, couple thêu hình rau củ 6 màu',
  },
  {
    image: 'https://cf.shopee.vn/file/3b55a9c1fa7e303b8f8828480fd1885e',
    title:
      'Áo thun tay lỡ nữ freesize - Áo phông form rộng dáng Unisex, mặc lớp, nhóm, cặp, couple thêu hình rau củ 6 màu',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/17/6d/36/179b87629f8780608d63943662103ce4.jpg',
    title: 'Smart Tivi Casper HD 32 inch 32HX6200',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/e4/93/74/d869ef799a8b1f7625146e97f53fcf04.png',
    title:
      'Áo thun nam thể thao trơn, cổ tròn đẹp, trẻ trung, mặc thoáng mát, thấm hút tốt, đủ size 25kg-92kg (Trắng)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/86/78/40/0df5a90d7bd5d327de2d25d510dd9b65.jpg',
    title: 'Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/82/d5/05/18c7abbd948c6e5dae557244a8e3ac44.jpg',
    title: 'KHẨU TRANG Y TẾ WAKAMONO - (4 Lớp, Hộp 10 Cái)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/d3/f6/d5/9fd75deca506264412da501a2a429c65.jpg',
    title:
      'Áo thun tay lỡ nữ freesize - Áo phông form rộng dáng Unisex, mặc lớp, nhóm, cặp, couple thêu hình rau củ 6 màu',
  },
  {
    image: 'https://cf.shopee.vn/file/3b55a9c1fa7e303b8f8828480fd1885e',
    title:
      'Áo thun tay lỡ nữ freesize - Áo phông form rộng dáng Unisex, mặc lớp, nhóm, cặp, couple thêu hình rau củ 6 màu',
  },
];

const SellingProduct = () => {
  const _renderItem = (item, index) => (
    <ItemProduct
      key={index}
      style={styles.box}
      image={item.image}
      nameProduct={item.title}
    />
  );

  return (
    <Block paddingHorizontal={12}>
      <Block row alignCenter marginBottom={16} space="between">
        <Text size={16} fontType="bold">
          Sản Phẩm Bán Chạy
        </Text>
        <Pressable style={styles.stylebtn}>
          <Text size={12}>Xem tất cả</Text>
          <Image
            source={icons.next}
            style={styles.iconnext}
            resizeMode="contain"
          />
        </Pressable>
      </Block>
      <Block row wrap alignCenter>
        {data.map(_renderItem)}
      </Block>
    </Block>
  );
};

export default SellingProduct;
