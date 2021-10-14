import {Block, Button, ModalBox, Text, WebView} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useEffect} from 'react';
import {UIActivityIndicator} from 'react-native-indicators';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const ModalTermOfUse = ({isVisible, setIsVisible, isAccept, setIsAccept}) => {
  const {data, isLoading} = useSelector(state => state.termsOfUse);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_TERMS_OF_USE});
  }, [dispatch]);
  const onBackdropPress = () => {
    setIsVisible(!isVisible);
  };
  const onPress = () => {
    setIsAccept(!isAccept);
    onBackdropPress();
  };
  return (
    <ModalBox
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      onBackdropPress={onBackdropPress}
      position="center">
      <Block height="70%" radius={20} backgroundColor={theme.colors.white}>
        <Text size={18} center fontType="bold" marginTop={12}>
          {data ? data[0]?.title : 'Điều khoản sử dụng'}
        </Text>
        {isLoading ? (
          <UIActivityIndicator size={getSize.s(20)} color={theme.colors.pink} />
        ) : (
          <>
            {data && data.length && (
              <WebView data={data[0]?.rule} style={styles.container} />
            )}
          </>
        )}
        <Button
          title="Chấp Nhận Điều Khoản"
          height={45}
          onPress={onPress}
          style={{marginHorizontal: getSize.s(12)}}
        />
      </Block>
    </ModalBox>
  );
};

export default ModalTermOfUse;
