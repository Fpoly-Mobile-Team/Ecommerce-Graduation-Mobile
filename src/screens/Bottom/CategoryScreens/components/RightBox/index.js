import {icons} from '@assets';
import {Block, Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize, height, width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {Image, Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UIActivityIndicator} from 'react-native-indicators';
import styles from './styles';

const RightBox = ({title}) => {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config?.data);
  const data = useSelector(state => state.categorySub?.data);
  const isLoading = useSelector(state => state.categorySub?.isLoading);

  useEffect(() => {
    dispatch({
      type: actions.GET_CATEGORY_SUB,
      params: {
        _id: title?._id,
      },
    });
  }, [dispatch, title?._id]);

  const _renderItemImage = index => (
    <Pressable key={index}>
      <Block width={(width * 0.7 - 24.2) / 3} marginTop={10}>
        <Image
          source={{uri: 'https://media3.scdn.vn/images/ecom/category/1580.jpg'}}
          style={styles.styleimg}
          resizeMode="contain"
        />
        <Text center size={12} numberOfLines={3}>
          Tã giấy
        </Text>
      </Block>
    </Pressable>
  );
  const _renderItem = (item, index) => {
    return (
      <Block
        key={item._id}
        radius={5}
        paddingVertical={10}
        paddingHorizontal={6}
        marginVertical={10}
        backgroundColor={theme.colors.white}>
        <Pressable>
          <Block row alignCenter space="between">
            <Text size={13} numberOfLines={2} fontType="semibold">
              {item.name}
            </Text>
            <Text size={11} color={theme.colors.pink}>
              Xem tất cả
            </Text>
          </Block>
        </Pressable>

        <Block row wrap>
          {[1, 3, 4].map(_renderItemImage)}
        </Block>
      </Block>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Block
        width={width * 0.7}
        paddingTop={10}
        paddingHorizontal={6}
        backgroundColor={theme.colors.background}>
        <Block
          row
          alignCenter
          height={45}
          radius={5}
          paddingHorizontal={12}
          space="between"
          backgroundColor={theme.colors.white}>
          <Text fontType="semibold">{title?.title}</Text>
          <Image
            source={icons.next}
            style={styles.icon_Next}
            resizeMode="contain"
          />
        </Block>
        <Block flex>
          {!isLoading && data?.length ? (
            <>{data[0]?.subCategory?.map(_renderItem)}</>
          ) : (
            <Block flex alignCenter justifyCenter height={height - 300}>
              <UIActivityIndicator
                size={getSize.s(20)}
                color={config?.backgroundcolor || theme.colors.pink}
              />
            </Block>
          )}
        </Block>
      </Block>
    </ScrollView>
  );
};

export default RightBox;
