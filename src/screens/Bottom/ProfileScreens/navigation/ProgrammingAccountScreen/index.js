import {Block, Header} from '@components';
import React from 'react';
import ContentSetting from './components/ContentSetting';

const ProgrammingAccountScreen = ({route}) => {
  const {title} = route.params || {};
  return (
    <Block flex>
      <Header
        canGoBack
        checkBackground
        title={title || 'Thiết lập tài khoản'}
      />
      <ContentSetting />
    </Block>
  );
};

export default ProgrammingAccountScreen;
