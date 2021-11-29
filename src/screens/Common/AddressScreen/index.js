import {lottie} from '@assets';
import {PlusCircle} from '@assets/svg/common';
import {Block, Empty, Header} from '@components';
import ItemAddress from '@components/Common/ItemList/ItemAddress';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {getSize} from '@utils/responsive';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const AddressScreen = () => {
  const navigation = useNavigation();
  const userInfo = useSelector(state => state.userInfo?.data);

  const renderItem = ({item, index}) => {
    const province = item.province + ', ' + item.district + ', ' + item.ward;
    return (
      <ItemAddress
        full_name={item.full_name}
        address={item.street}
        province={province}
        phone={item.phone}
        index={index}
        _id={item._id}
        ic_default={item.isDefault}
      />
    );
  };
  console.log('dtaaa------', userInfo?.address);
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Địa chỉ giao hàng" />
      {userInfo?.address && userInfo?.address?.length > 0 ? (
        <FlatList
          data={userInfo?.address}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(item._id)}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Empty
          lottie={lottie.emptyCategory}
          imageStyles={{width: getSize.s(200), height: getSize.s(200)}}
          content="Danh sách rỗng !"
        />
      )}

      <Block absolute bottom={20} right={0} padding={10}>
        <Pressable
          onPress={() => navigation.navigate(routes.ADD_ADDRESS_SCREEN)}>
          <PlusCircle />
        </Pressable>
      </Block>
    </Block>
  );
};

export default AddressScreen;
