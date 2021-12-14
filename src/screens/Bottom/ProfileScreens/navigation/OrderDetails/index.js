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
import {reverseString} from '@utils/needed';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductDetails from './components/ListProductDetails';
import styles from './styles';
import {Toast} from '@utils/helper';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';

const OrderDetails = ({route}) => {
  const navigation = useNavigation();
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
      Toast('Vui lòng nhập lý do huỷ đơn');
    }
  };

  return (
    <Block flex backgroundColor="background">
      <Header checkBackground canGoBack title="Hóa đơn chi tiết" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Block paddingHorizontal={16}>
          <HeaderComponent
            _id={reverseString(item._id)}
            purcharseDate={item.purcharseDate}
            shop={item.shopInfo.shopName}
            status={item.status}
            quantity={item.product?.length}
          />
        </Block>
          <ListProductDetails data={item?.product} />
        <Block flex>
          <FooterComponent data={item} />
        </Block>
      </ScrollView>

      {item.status === 'Bị hủy' && (
        <Button
          title="ĐẶT LẠI SẢN PHẨM"
          style={styles.btnStyle}
          height={45}
          onPress={() =>
            navigation.navigate(routes.PRODUCT_STORE, {
              id: item?.shopInfo?._id,
            })
          }
        />
      )}

      {item.status === 'Chờ nhận đơn' && (
        <Button
          title="HỦY ĐƠN HÀNG"
          style={{
            ...styles.btnStyle,
            backgroundColor: theme.colors.red,
          }}
          height={45}
          onPress={() => setIsVisible(true)}
          shadow
          elevation={10}
        />
      )}

      {item.status === 'Đang vận chuyển' && (
        <Button
          title="MUA THÊM SẢN PHẨM"
          style={{
            ...styles.btnStyle,
          }}
          height={45}
          onPress={() =>
            navigation.navigate(routes.PRODUCT_STORE, {
              id: item?.shopInfo?._id,
            })
          }
          shadow
          elevation={10}
        />
      )}

      {item.status === 'Đã giao' && (
        <Button
          title="ĐÁNH GIÁ SẢN PHẨM"
          style={styles.btnStyle}
          height={45}
          onPress={() =>
            navigation.navigate(routes.PRODUCT_STORE, {
              id: item?.shopInfo?._id,
            })
          }
        />
      )}

      <ModalBox
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onBackdropPress={() => setIsVisible(false)}>
        <Block height={'30%'} padding={12} backgroundColor={theme.colors.white}>
          <FormContainer>
            <Text center size={16} fontType="bold">
              Lý do huỷ đơn hàng{' '}
            </Text>
            <Text marginVertical={10}>Nội dung</Text>
            <TextInput
              placeholder="Nhập nguyên nhân hủy đơn hàng..."
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
