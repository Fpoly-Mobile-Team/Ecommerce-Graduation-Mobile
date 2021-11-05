import {Block} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {UIActivityIndicator} from 'react-native-indicators';
import {useSelector} from 'react-redux';

const LoadMore = () => {
  const config = useSelector(state => state.config.data);

  return (
    <Block marginVertical={20}>
      <UIActivityIndicator
        size={getSize.s(20)}
        color={config?.backgroundcolor || '#FF6E4B'}
      />
    </Block>
  );
};

export default LoadMore;
