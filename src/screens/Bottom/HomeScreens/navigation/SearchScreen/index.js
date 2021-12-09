import {icons} from '@assets';
import {ChevronLeft} from '@assets/svg/common';
import {Block, Text} from '@components';
import ItemSearchCategory from '@components/Common/ItemList/ItemSearchCategory';
import ItemSearchProduct from '@components/Common/ItemList/ItemSearchProduct';
import ItemSuggestions from '@components/Common/ItemList/ItemSuggestions';
import {useNavigation} from '@react-navigation/core';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, StatusBar, TextInput} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Data} from './components/dataSuggestions';
import styles from './styles';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state.category?.data);
  const datasearch = useSelector(state => state.searchProduct?.data);
  const totalPage = useSelector(state => state.searchProduct?.totalPage);

  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const {top} = useSafeAreaInsets();

  const renderItem = ({item, index}) => (
    <ItemSearchCategory index={index} image={item.icon} title={item.name} />
  );

  const renderItemSuggestions = (item, index) => (
    <ItemSuggestions key={index} title={item.title} />
  );

  const renderItemSearchProduct = ({item, index}) => (
    <ItemSearchProduct
      key={index}
      title={item.name}
      image={item.images[0]}
      _id={item._id}
    />
  );

  useEffect(() => {
    dispatch({type: actions.GET_CATEGORY_ALL});
  }, [dispatch]);

  useEffect(() => {
    if (keyword) {
      dispatch({
        type: actions.SEARCH_KEYWORD_PRODUCT,
        params: {
          name: keyword,
          p: 1,
          numshow: 12,
        },
      });
    }
  }, [dispatch, keyword]);
  const _loadMore = () => {
    if (keyword) {
      if (page < totalPage) {
        setPage(page + 1);
        dispatch({
          type: actions.SEARCH_KEYWORD_PRODUCT,
          isLoadMore: true,
          params: {
            name: keyword,
            p: page + 1,
            numshow: 12,
          },
        });
      }
    }
  };

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    setPage(1);
    if (keyword) {
      dispatch({
        type: actions.SEARCH_KEYWORD_PRODUCT,
        params: {
          name: keyword,
          p: 1,
          numshow: 12,
        },
      });
    }
  };
  return (
    <Block flex backgroundColor="white">
      <StatusBar barStyle="dark-content" />
      <Block
        row
        alignCenter
        justifyCenter
        paddingTop={top + 10}
        space="between"
        padding={12}>
        <Pressable onPress={() => navigation.goBack()}>
          <Block marginRight={10}>
            <ChevronLeft />
          </Block>
        </Pressable>
        <Block
          flex
          row
          alignCenter
          backgroundColor={theme.colors.smoke}
          paddingHorizontal={12}
          radius={5}>
          <Image
            resizeMode="contain"
            source={icons.search}
            style={styles.iconSearch}
          />
          <TextInput
            placeholder="Bạn cần tìm gì ..."
            placeholderTextColor={theme.colors.placeholder}
            style={styles.inputStyle}
            onChangeText={text => setKeyword(text)}
          />
        </Block>
      </Block>

      <Block paddingHorizontal={12}>
        {keyword ? (
          <FlatList
            data={datasearch}
            renderItem={renderItemSearchProduct}
            keyExtractor={(_, index) => _._id.toString()}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onEndReachedThreshold={0.5}
            onRefresh={_onRefresh}
            onEndReached={_loadMore}
            removeClippedSubviews={true}
          />
        ) : (
          <Block>
            <Text size={15} color={theme.colors.placeholder}>
              Gợi ý
            </Text>
            <Block row wrap>
              {Data.dataSuggestions.map(renderItemSuggestions)}
            </Block>
          </Block>
        )}
      </Block>
      <Block height={8} backgroundColor={theme.colors.smoke} />
      <Block flex paddingHorizontal={12} marginTop={10}>
        <Text size={15} color={theme.colors.placeholder}>
          Danh mục nổi bật
        </Text>
        <Block flex marginTop={10}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(_, index) => String(index)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            horizontal={false}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default SearchScreen;
