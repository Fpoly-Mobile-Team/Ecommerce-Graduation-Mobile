import {icons} from '@assets';
import {ChevronLeft} from '@assets/svg/common';
import {Block, Text} from '@components';
import ItemSearchCategory from '@components/Common/ItemList/ItemSearchCategory';
import ItemSearchProduct from '@components/Common/ItemList/ItemSearchProduct';
import ItemSuggestions from '@components/Common/ItemList/ItemSuggestions';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useState} from 'react';
import {FlatList, Image, Pressable, StatusBar, TextInput} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {data, dataCategory} from './components/data';
import {Data} from './components/dataSuggestions';
import styles from './styles';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState('');
  const {top} = useSafeAreaInsets();

  const renderItem = ({item, index}) => (
    <ItemSearchCategory index={index} image={item.image} title={item.title} />
  );

  const renderItemSuggestions = (item, index) => (
    <ItemSuggestions key={index} title={item.title} />
  );

  const renderItemSearchProduct = ({item, index}) => (
    <ItemSearchProduct key={index} title={item.title} image={item.image} />
  );

  return (
    <Block flex backgroundColor="white">
      <StatusBar barStyle="dark-content" />
      <Block
        row
        alignCenter
        justifyCenter
        paddingTop={top + 10}
        space="between"
        padding={16}>
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
            placeholder="Bạn muốn mua gì?"
            placeholderTextColor={theme.colors.placeholder}
            style={styles.inputStyle}
            onChangeText={text => setKeyword(text)}
          />
        </Block>
      </Block>

      <Block paddingHorizontal={12}>
        {keyword ? (
          <FlatList
            data={data}
            renderItem={renderItemSearchProduct}
            keyExtractor={(_, index) => String(index)}
            showsVerticalScrollIndicator={false}
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
            data={dataCategory}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
