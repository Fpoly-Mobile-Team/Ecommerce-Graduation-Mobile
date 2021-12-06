import {icons} from '@assets';
import {Block, Dialoading, Header, Text} from '@components';
import ItemPromoScreen from '@components/Common/ItemList/ItemPromoScreen';
import {theme} from '@theme';
import {Toast} from '@utils/helper';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import actions from '@redux/actions';
import OptionsMenu from 'react-native-option-menu';
import {SelectCircle} from '@assets/svg/common';
import styles from './styles';
import {FlatList} from 'react-native';

const PromoScreen = ({route}) => {
  const expiry = () => {
    Toast('Hạn sử dụng mã giảm giá');
  };
  const allPromotion = () => {
    Toast('Tất cả mã giảm giá');
  };

  const {id, shopName} = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const shopVoucher = useSelector(state => state.shopVoucher?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const isLoading = useSelector(state => state.addmyVoucher?.isLoading);

  const addVoucher = _id => {
    dispatch({
      type: actions.ADD_MY_VOUCHER,
      body: {
        user,
        idVoucher: _id,
      },
      shopId: id,
    });
  };

  const renderItem = ({item, index}) => {
    const isCheck = index === shopVoucher?.length - 1;
    return (
      <ItemPromoScreen
        name={shopName}
        title={item.content}
        date={moment(item.expireDate).format('DD/MM/YYYY')}
        image={item.image}
        index={index}
        isCheck={isCheck}
        check={shopVoucher}
        addVoucher={() => addVoucher(item._id)}
        save={item.save}
      />
    );
  };

  return (
    <Block flex backgroundColor="#E9EAEB">
      <Header checkBackground canGoBack title="Mã khuyến mãi" />
      <Block>
        {isLoading && (
          <Dialoading
            Modaling={[modalVisible, setModalVisible]}
            title="Chờ trong giây lát..."
          />
        )}
      </Block>
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
            options={['Tất cả', 'Hạn sử dụng', 'Hủy thao tác']}
            actions={[allPromotion, expiry]}
          />
        </Block>
      </Block>

      <FlatList
        data={shopVoucher}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default PromoScreen;
