import {icons} from '@assets';
import {Block, Header, Text} from '@components';
import ItemPromoScreen from '@components/Common/ItemList/ItemPromoScreen';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {Toast} from '@utils/helper';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import OptionsMenu from 'react-native-option-menu';
import {SelectCircle} from '../../../../assets/svg/common';
import {data} from './components/data';
import styles from './styles';

const PromoScreen = () => {
  const navigation = useNavigation();
  const editPost = () => {
    Toast('Edit Post');
  };
  const deletePost = () => {
    Toast('Delete Post');
  };

  const renderItem = ({item, index}) => {
    const isCheck = index === data.length - 1;
    return (
      <ItemPromoScreen
        name={item.name}
        title={item.title}
        date={item.date}
        image={item.Image}
        index={index}
        isCheck={isCheck}
      />
    );
  };

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
          <Text size={13} color={theme.colors.placeholder} lineHeight={18}>
            Sắp xếp:
          </Text>
        </Block>
        <Block paddingHorizontal={3} justifyCenter>
          <Text size={13} color={theme.colors.black} lineHeight={18}>
            Tất cả
          </Text>
        </Block>

        <Block paddingHorizontal={1} justifyCenter alignCenter>
          <OptionsMenu
            button={icons.caret_down}
            buttonStyle={styles.buttonStyle}
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
