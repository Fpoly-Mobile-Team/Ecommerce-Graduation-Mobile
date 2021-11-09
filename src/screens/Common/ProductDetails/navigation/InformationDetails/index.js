import {Block, Header, WebView} from '@components';
import React from 'react';

const InformationDetails = ({route}) => {
  const {url} = route.params;
  return (
    <Block flex backgroundColor="white">
      <Header checkBackground title="Thông Tin Sản Phẩm" canGoBack />
      <Block flex padding={16}>
        <WebView data={url} />
      </Block>
    </Block>
  );
};

export default InformationDetails;
