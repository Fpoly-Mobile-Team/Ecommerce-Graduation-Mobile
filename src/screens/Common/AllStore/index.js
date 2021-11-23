import {Block, Header} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ListAllStore from './components/ListAllStore';

const AllStore = () => {
  const dispatch = useDispatch();
  const shoplist = useSelector(state => state.shop?.data);
  useEffect(() => {
    dispatch({
      type: actions.GET_SHOP_USERS,
    });
  }, [dispatch]);
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header canGoBack checkBackground title={'Tất cả cửa hàng'} />
      <Block flex marginTop={35}>
        <ListAllStore data={shoplist} />
      </Block>
    </Block>
  );
};

export default AllStore;
