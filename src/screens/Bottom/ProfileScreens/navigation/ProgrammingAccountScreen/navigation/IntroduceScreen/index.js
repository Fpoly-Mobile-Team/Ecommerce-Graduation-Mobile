import {Block, Text, Header} from '@components';
import {theme} from '@theme';
import {Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '@assets';
import styles from './styles';
import actions from '@redux/actions';
import ListIntroduce from './components/ListIntroduce';

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
        marginTop={5}
        backgroundColor={theme.colors.white}>
        <Block
          style={{boderTopStartRadius: 20}}
          paddingVertical={30}
          alignCenter>
          <Image style={{alignSelf: 'center'}} source={images.logo} />
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
