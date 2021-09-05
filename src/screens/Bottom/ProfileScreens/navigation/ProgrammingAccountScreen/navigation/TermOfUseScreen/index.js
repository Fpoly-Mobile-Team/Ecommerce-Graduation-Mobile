import {Block, Header, WebView} from '@components';
import actions from '@redux/actions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const TermOfUseScreen = () => {
  const data = useSelector(state => state.termsOfUse?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_TERMS_OF_USE});
  }, [dispatch]);

  return (
    <Block flex backgroundColor="white">
      <Header
        canGoBack
        checkBackground
        title={data ? data[0]?.title : 'Điều khoản sử dụng'}
      />
      {data && data.length && (
        <WebView data={data[0]?.rule} style={{padding: 12}} />
      )}
    </Block>
  );
};

export default TermOfUseScreen;
