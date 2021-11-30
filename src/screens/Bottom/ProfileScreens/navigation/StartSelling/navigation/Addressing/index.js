import {Block, Header, Text} from '@components';
import {AddressContext} from '@context';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useRef, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import District from '../components/District';
import Province from '../components/Province';
import Ward from '../components/Ward';
import styles from './styles';

const keyExtractor = (item, index) => index.toString();

const Addressing = () => {
  const config = useSelector(state => state.config?.data);

  const ref = useRef();
  const [id, setId] = useState(0);

  const [province, setProvince] = useState({
    idProvince: null,
    name: '',
  });

  const [district, setDistrict] = useState({
    idDistrict: null,
    name: '',
  });

  const [ward, setWard] = useState({
    idCommune: null,
    name: '',
  });

  const DATA = [
    {
      title: province?.name ? province?.name : 'Tỉnh, Thành',
      components: Province,
    },
    {
      title: district?.name ? district?.name : 'Quận, Huyện',
      components: District,
    },
    {
      title: ward?.name ? ward?.name : 'Phường, Xã',
      components: Ward,
    },
  ];

  const renderTitle = (item, index) => {
    const isCheck = id === index;
    const onPress = () => {
      let isCheck = false;
      if (province?.name) {
        return (isCheck = true);
      }
      if (province?.name && district?.name) {
        return (isCheck = true);
      }
      if (isCheck) {
        setId(index);
        ref?.current.scrollToIndex({animated: true, index});
      }
    };

    return (
      <Pressable key={index} onPress={onPress}>
        <Block
          width={width / 3}
          height={width * 0.12}
          alignCenter
          justifyCenter
          style={styles.button(isCheck, config)}
          backgroundColor={theme.colors.white}>
          <Text
            numberOfLines={1}
            color={theme.colors.placeholder}
            fontType={id === index ? 'semibold' : 'regular'}>
            {item.title}
          </Text>
        </Block>
      </Pressable>
    );
  };

  const renderComponent = ({item, index}) => {
    return <item.components />;
  };

  const valueContext = {
    id: {id, setId},
    ref,
    province: {province, setProvince},
    district: {district, setDistrict},
    ward: {ward, setWard},
  };

  return (
    <Block flex>
      <Header title="Địa chỉ lấy hàng" canGoBack />
      <AddressContext.Provider value={valueContext}>
        <Block row backgroundColor={theme.colors.white}>
          {DATA.map(renderTitle)}
        </Block>
        <FlatList
          ref={ref}
          data={DATA}
          horizontal
          pagingEnabled
          bounces={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderComponent}
          keyExtractor={keyExtractor}
        />
      </AddressContext.Provider>
    </Block>
  );
};

export default Addressing;
