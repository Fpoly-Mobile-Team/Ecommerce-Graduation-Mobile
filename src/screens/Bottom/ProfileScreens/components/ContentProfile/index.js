import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {Image, Pressable} from 'react-native';
import {DATA, DATABILL} from '../data';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {Badge} from 'react-native-elements';
import actions from '@redux/actions';
import {useIsFocused} from '@react-navigation/native';

const ContentProfile = () => {
  return (
    <Block wrap marginTop={0}>
      {DATA?.map(ActionsButton)}
    </Block>
  );
};

const ActionsButton = (item, index) => {
  const config = useSelector(state => state.config?.data);
  const navigation = useNavigation();

  return (
    <Block key={item.id}>
      <Block
        row
        alignCenter
        paddingHorizontal={12}
        paddingVertical={12}
        space="between">
        <Pressable
          onPress={() =>
            item.id !== '1'
              ? navigation.navigate(item.navigation, {title: item.title})
              : {}
          }>
          <Block row alignCenter>
            {item.id !== '1' && (
              <Image
                source={item.image}
                style={styles.icon}
                resizeMode="contain"
              />
            )}
            <Text fontType={item.id === '1' ? 'bold' : 'regular'}>
              {item.title}
            </Text>
          </Block>
        </Pressable>
        {item.id === '1' ? (
          <Pressable onPress={() => navigation.navigate(item.navigation)}>
            <Text
              color={config?.backgroundcolor || theme.colors.pink}
              fontType="semibold">
              XEM LỊCH SỬ
            </Text>
          </Pressable>
        ) : (
          <Pressable>
            <Image
              source={icons.arrow_right}
              style={styles.iconArrow}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </Block>
      {item.id === '1' && (
        <Block row alignCenter wrap>
          {DATABILL?.map(_renderItem)}
        </Block>
      )}
      <Block
        height={item.id === '1' ? 8 : 1}
        width={width}
        backgroundColor={theme.colors.smoke}
      />
    </Block>
  );
};

const _renderItem = item => {
  const navigation = useNavigation();
  const config = useSelector(state => state.config?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const data = useSelector(state => state.historyOrder?.data);
  const dataCancel = useSelector(state => state.historyOrderCancel?.data);
  const dataDelivering = useSelector(
    state => state.historyOrderDelivering?.data,
  );
  const dataWaiting = useSelector(state => state.historyOrderWaiting?.data);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const orderStatusQuantity =
    dataWaiting && item.title === 'Đang xử lý'
      ? dataWaiting?.length
      : dataDelivering && item.title === 'Đang giao' && dataDelivering?.length;

  useEffect(() => {
    if (isFocused) {
      dispatch({
        type: actions.GET_HISTORY_ORDER_WAITING,
        params: {userId: user, status: 'Chờ nhận đơn'},
      });
      dispatch({
        type: actions.GET_HISTORY_ORDER_CANCEL,
        params: {userId: user, status: 'Bị hủy'},
      });
      dispatch({
        type: actions.GET_HISTORY_ORDER_DELIVERING,
        params: {userId: user, status: 'Đang vận chuyển'},
      });
      dispatch({
        type: actions.GET_HISTORY_ORDER,
        params: {userId: user, status: 'Đã giao'},
      });
    }
  }, [dispatch, isFocused, user]);

  return (
    <Pressable
      key={item.id}
      onPress={() =>
        navigation.navigate(routes.ORDERHISTORY, {title: item.title})
      }>
      <Block flex alignCenter width={width / 4} marginTop={6}>
        {orderStatusQuantity ? (
          <Badge
            status="error"
            containerStyle={{position: 'absolute', top: -5, right: 20}}
            badgeStyle={{}}
            textProps={{allowFontScaling: false}}
            value={orderStatusQuantity}
          />
        ) : null}

        <Block
          alignCenter
          justifyCenter
          width={50}
          height={50}
          radius={50}
          marginBottom={10}
          backgroundColor={`${config?.backgroundcolor}20`}>
          <Image
            source={item.image}
            style={styles.iconBill(config?.backgroundcolor)}
            resizeMode="contain"
          />
        </Block>

        <Text center marginBottom={10} marginHorizontal={12} size={12}>
          {item.title}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ContentProfile;
