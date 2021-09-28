import {Block, Shimmer} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';

const keyExtractor = (_, index) => String(index);

const CategoryHolder = () => {
  const _renderLeft = () => {
    return <Shimmer width={width * 0.3} height={width * 0.3} />;
  };
  const _renderRight = ({_, index}) => {
    return (
      <>
        {index === 0 && (
          <Shimmer width={width * 0.7} height={(width * 0.7) / 6} />
        )}

        <Shimmer width={width * 0.7} height={(width * 0.7) / 2} />
      </>
    );
  };
  return (
    <Block flex row space="between">
      <Block width={width * 0.3} marginRight={6}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          bounces={false}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={_renderLeft}
        />
      </Block>
      <Block width={width * 0.7 - 6}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={keyExtractor}
          bounces={false}
          showsVerticalScrollIndicator={false}
          renderItem={_renderRight}
        />
      </Block>
    </Block>
  );
};

export default CategoryHolder;
