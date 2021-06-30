import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import styles from './styles';

const data = [
  {
    picture:
      'https://salt.tikicdn.com/cache/w444/ts/product/f7/dc/b3/62e166121af858dcea5156c0808250ac.jpg',
  },
  {
    picture:
      'https://salt.tikicdn.com/cache/w444/ts/product/6b/b4/2b/01f85d903f32894569308ebf336963c5.jpg',
  },
  {
    picture:
      'https://salt.tikicdn.com/cache/w444/ts/product/2d/5e/5b/adb76a83fe644886200a48d7c40a4da6.jpg',
  },
  {
    picture:
      'https://salt.tikicdn.com/cache/w444/ts/product/34/54/4d/11015a635384c5c753d4c7940a0ab987.jpg',
  },
  {
    picture:
      'https://salt.tikicdn.com/cache/w444/ts/product/40/64/00/f12c65a70a5a2b87bb3a0e2299fbb61c.jpg',
  },
];

const ImageHeader = () => {
  const [active, setActive] = useState(1);

  const _renderImage = (item, index) => {
    return (
      <Block key={index} width={width} height={width}>
        <Image
          source={{
            uri: item.picture,
          }}
          style={styles.imgstyle}
          resizeMode="contain"
        />
      </Block>
    );
  };

  const onChange = ({nativeEvent}) => {
    const position = Math.floor(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setActive(position + 1);
  };

  return (
    <Block>
      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        onMomentumScrollEnd={onChange}>
        {data.map(_renderImage)}
      </ScrollView>
      <_renderItemSizeImage active={active} />
    </Block>
  );
};

const _renderItemSizeImage = ({active}) => {
  return (
    <Block
      row
      justifyCenter
      alignCenter
      absolute
      radius={5}
      bottom={20}
      right={12}
      paddingHorizontal={5}
      paddingVertical={5}
      backgroundColor="#24242480">
      <Text center color={theme.colors.white} fontType="semibold">
        {active} {'/'} {data.length}
      </Text>
    </Block>
  );
};

export default ImageHeader;
