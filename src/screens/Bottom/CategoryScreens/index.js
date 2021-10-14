import {lottie} from '@assets';
import {Block, Empty, Header} from '@components';
import CategoryHolder from '@components/Common/PlaceHolder/CategoryHolder';
import actions from '@redux/actions';
import {getSize} from '@utils/responsive';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LeftBox from './components/LeftBox';
import RightBox from './components/RightBox';

const CategoryScreens = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.category);
  const data = useSelector(state => state.category?.data);

  const [title, setTitle] = useState(null);

  useEffect(() => {
    dispatch({type: actions.GET_CATEGORY_ALL});
  }, [dispatch]);

  return (
    <Block flex backgroundColor="background">
      <Header title="Danh mục" />
      {isLoading ? (
        <CategoryHolder />
      ) : (
        <>
          {data?.length && data && !isLoading ? (
            <Block row flex>
              <LeftBox data={data} setTitle={setTitle} />
              <RightBox title={title} />
            </Block>
          ) : (
            <Empty
              lottie={lottie.emptyCategory}
              imageStyles={{width: getSize.s(200), height: getSize.s(200)}}
              content="Danh sách rỗng !"
            />
          )}
        </>
      )}
    </Block>
  );
};

export default CategoryScreens;
