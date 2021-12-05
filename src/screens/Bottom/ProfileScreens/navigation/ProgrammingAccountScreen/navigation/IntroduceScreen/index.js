import {images} from '@assets';
import {Block, Header, Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListIntroduce from './components/ListIntroduce';
import styles from './styles';

const IntroduceScreen = () => {
  const dispatch = useDispatch();
  const introduce = useSelector(state => state.introduce?.data);

  useEffect(() => {
    dispatch({type: actions.INTRODUCE_INFOR});
  }, [dispatch]);

  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header checkBackground canGoBack title="Giới thiệu " />
      <Block
        style={styles.container}
        marginHorizontal={10}
        marginTop={10}
        backgroundColor={theme.colors.white}>
        <Block style={styles.box} paddingVertical={30} alignCenter>
          <Image style={styles.image} source={images.logo} />
          <Text paddingTop={25} fontType="bold" size={18}>
            Ứng dụng thương mại điện tử Ants
          </Text>
        </Block>
      </Block>
      <Block
        marginHorizontal={10}
        flex
        backgroundColor={theme.colors.background}>
        {introduce && <ListIntroduce data={introduce} />}
      </Block>
    </Block>
  );
};

export default IntroduceScreen;
