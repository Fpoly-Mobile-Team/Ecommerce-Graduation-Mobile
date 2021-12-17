import {icons} from '@assets';
import {ChevronLeft} from '@assets/svg/common';
import {Block, Text} from '@components';
import ItemSearchCategory from '@components/Common/ItemList/ItemSearchCategory';
import ItemSuggestions from '@components/Common/ItemList/ItemSuggestions';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Data} from './components/dataSuggestions';
import styles from './styles';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state.category?.data);
  const datasearch = useSelector(state => state.searchProduct?.data);

  const [keyword, setKeyword] = useState('');
  const {top} = useSafeAreaInsets();

  const renderItem = ({item, index}) => (
    <ItemSearchCategory index={index} image={item.icon} title={item.name} />
  );

  const renderItemSuggestions = (item, index) => (
    <ItemSuggestions key={index} title={item.title} />
  );

  const renderItemSearchProduct = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.boxItem}
        onPress={() =>
          navigation.navigate(routes.SEARCH_BY_KEYWORD_SCREEN, {
            keyword: item._id,
          })
        }>
        <Text>{item._id}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch({type: actions.GET_CATEGORY_ALL});
  }, [dispatch]);

  useEffect(() => {
    if (keyword) {
      dispatch({
        type: actions.SEARCH_KEYWORD_PRODUCT,
        params: {
          keyword: keyword,
        },
      });
    }
  }, [dispatch, keyword]);

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
          <>
            {datasearch?.length > 0 ? (
              <FlatList
                data={datasearch}
                renderItem={renderItemSearchProduct}
                keyExtractor={(_, index) => _._id.toString()}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                removeClippedSubviews={true}
              />
            ) : null}
          </>
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
