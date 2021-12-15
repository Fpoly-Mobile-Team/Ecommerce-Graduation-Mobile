import {Block, Header} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ListCategoryFiller from './components/ListCategoryFiller';
import {UIActivityIndicator} from 'react-native-indicators';
import {getSize} from '@utils/responsive';

const ChooseCategoryFiller = ({route}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.category?.data);
  const isLoading = useSelector(state => state.category?.isLoading);
  const config = useSelector(state => state.config?.data);

  useEffect(() => {
    dispatch({
      type: actions.GET_CATEGORY_ALL,
    });
  }, [dispatch]);
  return (
    <Block flex>
      <Header title={'Chọn Danh Mục'} canGoBack checkBackground />
      <Block flex paddingTop={20} backgroundColor={theme.colors.white}>
        {isLoading ? (
          <UIActivityIndicator
            size={getSize.s(20)}
            color={config?.backgroundcolor}
          />
        ) : (
          <ListCategoryFiller data={data} />
        )}
      </Block>
    </Block>
  );
};

export default ChooseCategoryFiller;
