import {Block, Header, WebView} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useEffect} from 'react';
import {UIActivityIndicator} from 'react-native-indicators';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const TermOfUseScreen = () => {
  const {data, isLoading} = useSelector(state => state.termsOfUse);
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
      {isLoading ? (
        <UIActivityIndicator size={getSize.s(20)} color={theme.colors.pink} />
      ) : (
        <>
          {data && data.length && (
            <WebView data={data[0]?.rule} style={styles.container} />
          )}
        </>
      )}
    </Block>
  );
};

export default TermOfUseScreen;
