import {
  Block,
  Button,
  FormContainer,
  Header,
  ModalBox,
  Text,
  TextInput,
} from '@components';
import {goBack, navigate} from '@navigation/RootNavigation';
import {routes} from '@navigation/routes';
import actions from '@redux/actions';
import {theme} from '@theme';
import {reverseString, Toast} from '@utils/needed';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductDetails from './components/ListProductDetails';
import styles from './styles';

const OrderDetails = ({route}) => {
  const {item} = route.params || {};
  const [isVisible, setIsVisible] = useState(false);
  const [description, setDescription] = useState('');
  const isLoading = useSelector(state => state.cancelOrder.isLoading);
  const user = useSelector(state => state.tokenUser?.data);

  const dispatch = useDispatch();

  const _onPress = () => {
    if (description) {
      dispatch({
        type: actions.CANCEL_ORDER,
        body: {
          orderId: item._id,
          description,
        },
        user,
        status: 'Bị hủy',
      });
      if (!isLoading) {
        setIsVisible(false);
        goBack();
      }
    } else {
      Toast('Vui lòng nhập lí do huỷ đơn');
    }
  };

  return (
    <Block flex backgroundColor="background">
      <Header checkBackground canGoBack title="Hóa đơn chi tiết" />
      <Block paddingHorizontal={20}>
        <HeaderComponent
          _id={reverseString(item._id)}
          purcharseDate={item.purcharseDate}
          shop={item.shopInfo.shopName}
          status={item.status}
          quantity={item.product?.length}
        />
      </Block>
      <Block flex>
        <ListProductDetails data={item?.product} />
      </Block>
      <Block flex>
        <FooterComponent data={item} />
      </Block>

      {item.status === 'Bị hủy' && (
        <Button
          title="Đặt lại"
          titleStyle={{color: theme.colors.black}}
          style={styles.btnStyle}
          height={45}
          onPress={() => navigate(routes.HOMESCREENS)}
        />
      )}
      {item.status === 'Chờ nhận đơn' && (
        <Button
          title="Huỷ Đơn Hàng"
          style={{...styles.btnStyle, backgroundColor: 'red', borderWidth: 0}}
          height={45}
          onPress={() => setIsVisible(true)}
        />
      )}

      <ModalBox
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onBackdropPress={() => setIsVisible(false)}>
        <Block height={'30%'} padding={12} backgroundColor={theme.colors.white}>
          <FormContainer>
            <Text center size={16} fontType="bold">
              Lí do huỷ đơn hàng{' '}
            </Text>
            <Text marginVertical={10}>Nội dung</Text>
            <TextInput
              placeholder="Nhập nội dung lí do huỷ đơn hàng..."
              inputStyle={{height: getSize.s(60)}}
              onChangeText={text => setDescription(text)}
              multiline
            />
            <Button
              title="Gửi"
              height={45}
              style={{marginTop: getSize.s(20)}}
              onPress={_onPress}
              disabled={isLoading}
            />
          </FormContainer>
        </Block>
      </ModalBox>
    </Block>
  );
};

export default OrderDetails;
