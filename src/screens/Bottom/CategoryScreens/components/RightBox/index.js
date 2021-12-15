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
import {useNavigation} from '@react-navigation/core';
import ItemProductCateSub from '@components/Common/ItemList/ItemProductSub';
import {routes} from '@navigation/routes';

const RightBox = ({title}) => {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config?.data);
  const data = useSelector(state => state.categorySub?.data);
  const isLoading = useSelector(state => state.categorySub?.isLoading);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch({
      type: actions.GET_CATEGORY_SUB,
      params: {
        _id: title?._id,
      },
    });
  }, [dispatch, title?._id]);

  const renderItem = (item, index) => (
    <ItemProductCateSub
      _id={item._id}
      key={index}
      review={item.reviews}
      style={{...styles.box(index)}}
      images={item.images[0]}
      nameProduct={item.name}
      price={item.price}
      productSold={item.productSold}
      sellOff={item.sellOff}
    />
  );
  const _renderItem = (item, index) => {
    return (
      <>
        {item.productInfos?.length > 0 && (
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
                <Pressable
                  onPress={() =>
                    navigation.navigate(routes.LIST_PRODUCTS, {
                      productSub: item.productInfos,
                      titleCategorySub: item.name,
                      tag: '1',
                    })
                  }>
                  <Text size={11} color={theme.colors.pink}>
                    Xem tất cả
                  </Text>
                </Pressable>
              </Block>
            </Pressable>

            <Block row wrap paddingTop={10}>
              {item.productInfos?.map(renderItem)}
            </Block>
          </Block>
        )}
      </>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Block
        width={width * 0.7}
        paddingTop={10}
        paddingHorizontal={6}
        backgroundColor={theme.colors.background}>
        <Pressable
          onPress={() =>
            navigation.navigate(routes.LIST_PRODUCTS, {
              titleCategory: title?.title,
              tag: '1',
            })
          }>
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
        </Pressable>
        <Block flex>
          {!isLoading && data?.length ? (
            <>{data[0]?.subCategories?.map(_renderItem)}</>
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
