import {Block, LazyImage, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';

const ImageHeader = ({data}) => {
  const [active, setActive] = useState(1);

  const _renderImage = (item, index) => {
    return (
      <Block key={index} width={width} height={width}>
        <LazyImage
          source={{
            uri: item,
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
        {data?.map(_renderImage)}
      </ScrollView>
      <_renderItemSizeImage active={active} data={data} />
    </Block>
  );
};

const _renderItemSizeImage = ({active, data}) => {
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
        {active} {'/'} {data?.length}
      </Text>
    </Block>
  );
};

export default ImageHeader;
