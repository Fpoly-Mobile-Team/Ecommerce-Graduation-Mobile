import {icons, lottie} from '@assets';
import {ChevronLeft} from '@assets/svg/common';
import {Block, Empty} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useState, useEffect} from 'react';
import {FlatList, Image, Pressable, TextInput} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const SearchByKeyWordScreen = ({route}) => {
  const {keyword} = route.params || {};
  const dispatch = useDispatch();
  const data = useSelector(state => state.searchProductByKeyword?.data);
  const modeLoading = useSelector(
    state => state.searchProductByKeyword?.isLoading,
  );
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const [keywords, setKeyword] = useState(keyword);
  useEffect(() => {
    if (keywords) {
      dispatch({
        type: actions.GET_PRODUCT_BY_KEYWORD,
        body: {keyword: keywords},
      });
    }
  }, [dispatch, keywords]);

  const _renderItem = ({item, index}) => {
    return (
      <ItemProduct
        key={index}
        review={item.reviews}
        style={styles.style_item(index)}
        _id={item._id}
        images={item.images[0]}
        nameProduct={item.name}
        price={item.price}
        productSold={item.productSold}
        sellOff={item.sellOff}
      />
    );
  };
  return (
    <Block flex>
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
            value={keywords}
          />
        </Block>
      </Block>
      {modeLoading ? (
        <Empty content="Đợi trong giây lát..." lottie={lottie.loading_percent} />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item._id.toString()}
        />
      )}
    </Block>
  );
};

export default SearchByKeyWordScreen;
