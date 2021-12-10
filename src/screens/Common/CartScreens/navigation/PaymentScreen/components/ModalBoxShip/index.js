import {ModalBox, Text, Block} from '@components';
import moment from 'moment';
import React from 'react';

import {Pressable, View} from 'react-native';
import {Currency} from '@utils/helper';

const ModalBoxShip = ({
  isVisible,
  setIsVisible,
  onBackdropPress,
  data,
  shipMethod,
}) => {
  const [selectedMethodShip, setselectedMethodShip] = shipMethod;

  const renderItem = (item, index) => {
    return (
      <Block flex key={index}>
        <Pressable
          onPress={() => {
            setselectedMethodShip(item);
            setIsVisible(false);
          }}>
          <Block row alignCenter marginBottom={5} space="between">
            <Text>{item.method}</Text>
            <Text marginRight={10}>{Currency(item.priceShip)}</Text>
          </Block>
          <Text>
            Nhận hàng vào {item.dateStart} - {item.dateEnd}
          </Text>
        </Pressable>
      </Block>
    );
  };
  return (
    <ModalBox
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      onBackdropPress={onBackdropPress}
      position="center">
      <Block backgroundColor={'white'} height={'25%'} padding={12}>
        <Text size={16} center fontType="bold" marginBottom={15}>
          Phương thức vận chuyển
        </Text>
        {data?.map(renderItem)}
      </Block>
    </ModalBox>
  );
};

export default ModalBoxShip;
