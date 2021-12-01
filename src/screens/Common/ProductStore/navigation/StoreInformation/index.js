import {Block, Button, Header, LazyImage, Text} from '@components';
import {Alert, ScrollView} from 'react-native';
import styles from './styles';
import actions from '@redux/actions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {theme} from '@theme';
import ListItemStoreInformation from './components/ListItemStoreInformation';
import {width} from '@utils/responsive';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
function sumArray(mang) {
  let sum = 0;
  mang.forEach(function (value) {
    sum += value;
  });

  return sum;
}
const StoreInformation = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shop = useSelector(state => state.infoShop?.data);
  const productShop = useSelector(state => state.productDetailsShop?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const averageRating = useSelector(state => state.averageRating?.data);
  const isLoading = useSelector(state => state.averageRating?.isLoading);

  const {id} = route.params || {};

  let array = [];
  for (let index = 0; index < productShop.length; index++) {
    array.push(productShop[index]?.reviews?.length);
  }
  useEffect(() => {
    if (id) {
      dispatch({
        type: actions.GET_SHOP_USERS_BY_ID,
        body: {
          shopId: id,
        },
      });
      dispatch({
        type: actions.GET_PRODUCT_DETAILS_BY_SHOP,
        params: {
          shopId: id,
        },
      });
      dispatch({
        type: actions.GET_AVERAGE_RATING_PRODUCT,
        body: {
          shopId: id,
        },
      });
    }
  }, [id, dispatch]);
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Thông tin cửa hàng" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block backgroundColor={theme.colors.white} marginTop={10} row>
          <Block alignCenter justifyCenter width={80} height={80}>
            <LazyImage
              source={{
                uri: shop?.profilePicture,
              }}
              thumbnailSource={{uri: shop?.profilePicture}}
              style={styles.avatar}
            />
          </Block>
          <Block paddingVertical={10}>
            <Text marginTop={10} fontType="medium">
              {shop?.shopName}
            </Text>
            <Block marginTop={2} row alignCenter>
              <Block
                height={5}
                radius={5}
                width={5}
                marginRight={4}
                backgroundColor={
                  shop?.currentStatus === 'Online' && 'Idle'
                    ? theme.colors.green
                    : theme.colors.pink
                }
              />
              <Text size={11}>{shop?.currentStatus}</Text>
            </Block>
          </Block>
        </Block>
        {!isLoading && averageRating && productShop && (
          <ListItemStoreInformation
            averageRating={
              averageRating[0]?.shopInfo?.avgRating?.toFixed(1) || 0
            }
            data={shop}
            countFeedback={sumArray(array)}
            productStore={productShop}
          />
        )}

        <Block paddingTop={40} alignCenter>
          {user ? (
            <Button
              onPress={() => navigation.navigate(routes.STORE_DENOUNCE)}
              title="Tố cáo cửa hàng này"
              width={width - 20}
              height={45}
            />
          ) : (
            <Button
              onPress={() =>
                Alert.alert('Đăng nhập để sử dụng tính năng này bạn nhé!')
              }
              title="Tố cáo cửa hàng này"
              width={width - 20}
              height={45}
            />
          )}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default StoreInformation;
