import {Block, Header, Text} from '@components';
import ItemPromoScreen from '@components/Common/ItemList/ItemPromoScreen';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {Toast} from '@utils/helper';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import OptionsMenu from 'react-native-option-menu';
import {SelectCircle, SelectsCircle} from '../../../../assets/svg/common';
import {data} from './components/data';

const select_icon = require('../../../../assets/icons/Shape.png');

const PromoScreen = () => {
  const navigation = useNavigation();
  const editPost = () => {
    Toast('Edit Post');
  };
  const deletePost = () => {
    Toast('Delete Post');
  };
  const Select = <SelectsCircle />;

  const renderItem = ({item}) => (
    <ItemPromoScreen
      name={item.name}
      title={item.title}
      date={item.date}
      image={item.Image}
    />
  );

  return (
    <Block flex backgroundColor="#E9EAEB">
      <Header checkBackground canGoBack title="Mã khuyến mãi" />
      <Block
        paddingHorizontal={12}
        paddingVertical={12}
        row
        backgroundColor={theme.colors.white}>
        <SelectCircle />
        <Block paddingLeft={8} justifyCenter>
          <Text
            size={16}
            color={theme.colors.placeholder}
            fontType="semibold"
            lineHeight={18}>
            Sắp xếp:
          </Text>
        </Block>
        <Block paddingHorizontal={3} justifyCenter>
          <Text size={16} color={theme.colors.black} lineHeight={18}>
            Tất cả
          </Text>
        </Block>
        <Block paddingHorizontal={1} justifyCenter alignCenter>
          <OptionsMenu
            button={select_icon}
            buttonStyle={{
              width: 10,
              height: 12,
              resizeMode: 'contain',
            }}
            destructiveIndex={1}
            options={['Hạn sử dụng', 'Tất cả']}
            actions={[editPost, deletePost]}
          />
        </Block>
      </Block>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default PromoScreen;
