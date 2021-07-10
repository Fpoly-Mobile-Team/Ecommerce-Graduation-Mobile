import {Block, Text} from '@components';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import {FlatList, Image, StatusBar, TextInput, Pressable} from 'react-native';
import {dataCategory} from './components/data';
import {icons} from '@assets';
import ItemSearchCategory from '@components/Common/ItemList/ItemSearchCategory';
import ItemSuggestions from '@components/Common/ItemList/ItemSuggestions';
import {dataSuggestions} from './components/dataSuggestions';
import {ChevronLeft} from '@assets/svg/common';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState('');
  const {top} = useSafeAreaInsets();
  const renderItem = ({item, index}) => (
    <ItemSearchCategory index={index} image={item.Image} title={item.title} />
  );
  const renderItemSuggestions = (item,index) => <ItemSuggestions key={index} title={item.title} />;

  return (
    <Block flex>
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
            style={{width: 20, height: 20}}
          />
          <TextInput
            placeholder="Bạn muốn mua gì?"
            style={{fontSize: 15, paddingLeft: 2, alignItems: 'center'}}
            onChangeText={text => setKeyword(text)}
          />
        </Block>
      </Block>

      <Block paddingHorizontal={12} paddingVertical={12}>
        {keyword ? (
          <Block>{dataSuggestions.map(renderItemSuggestions)}</Block>
        ) : (
          <Block>
            <Text size={15} color={theme.colors.placeholder}>
              Gợi ý
            </Text>
            <Block row wrap>
              {dataSuggestions.map(renderItemSuggestions)}
            </Block>
          </Block>
        )}
      </Block>
      <Block paddingHorizontal={12} flex>
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
