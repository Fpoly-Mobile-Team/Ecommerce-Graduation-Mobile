import {Block, Header} from '@components';
import React, {useState} from 'react';
import LeftBox from './components/LeftBox';
import RightBox from './components/RightBox';

const data = [
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/66/15/4f/6282e8c6655cb87cb226e3b701bb9137.png',
    title: 'Đồ Chơi - Mẹ & Bé',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/93/27/e3/192b0ebe1d4658c51f9931bda62489b2.png',
    title: 'Điện Thoại - Máy Tính Bảng',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/85/13/02/d8e5cd75fd88862d0f5f647e054b2205.png',
    title: 'Làm Đẹp - Sức Khỏe',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/48/96/3b/9403c9f9579883b9433decf44e3d4591.png',
    title: 'Thời trang nữ',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/7b/54/d8/fdee971618ba2ef7ae7a313021677c46.png',
    title: 'Thời trang nam',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/66/15/4f/6282e8c6655cb87cb226e3b701bb9137.png',
    title: 'Đồ Chơi - Mẹ & Bé',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/93/27/e3/192b0ebe1d4658c51f9931bda62489b2.png',
    title: 'Điện Thoại - Máy Tính Bảng',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/85/13/02/d8e5cd75fd88862d0f5f647e054b2205.png',
    title: 'Làm Đẹp - Sức Khỏe',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/48/96/3b/9403c9f9579883b9433decf44e3d4591.png',
    title: 'Thời trang nữ',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/w64/ts/category/7b/54/d8/fdee971618ba2ef7ae7a313021677c46.png',
    title: 'Thời trang nam',
  },
];

const CategoryScreens = () => {
  const [title, settitle] = useState(data[0].title);
  return (
    <Block flex backgroundColor="background">
      <Header title="Danh mục" />
      <Block row flex>
        <LeftBox data={data} settitle={settitle} />
        <RightBox title={title} />
      </Block>
    </Block>
  );
};

export default CategoryScreens;
