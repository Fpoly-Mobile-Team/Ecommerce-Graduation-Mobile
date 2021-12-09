import {Block, Text} from '@components';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import React from 'react';
import {Pressable} from 'react-native';
import ModalBoxShip from '../ModalBoxShip';

const ShippingMethod = ({visible, data, shipMethod}) => {
  const [isVisible, setIsVisible] = visible;
  const [selectedMethodShip, setselectedMethodShip] = shipMethod;
  return (
    <Block marginTop={27} paddingHorizontal={16}>
      <Text size={16} fontType="semibold">
        Phương thức vận chuyển
      </Text>
      <Pressable>
        <Block
          row
          shadow
          shadowColor={'#000008'}
          marginTop={17}
          radius={8}
          paddingVertical={18}
          paddingHorizontal={28}
          backgroundColor={theme.colors.white}>
          <Block flex>
            <Block row alignCenter marginBottom={5} space="between">
              <Text>{selectedMethodShip?.method}</Text>
              <Text marginRight={10}>
                {Currency(selectedMethodShip?.priceShip)}
              </Text>
            </Block>
            <Text>
              Nhận hàng vào {selectedMethodShip?.dateStart} -{' '}
              {selectedMethodShip?.dateEnd}
            </Text>
          </Block>
          <Pressable onPress={() => setIsVisible(true)}>
            <Text fontType="bold" color={theme.colors.pink}>
              Thay đổi
            </Text>
          </Pressable>
        </Block>
      </Pressable>
      <ModalBoxShip
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        data={data}
        shipMethod={[selectedMethodShip, setselectedMethodShip]}
        onBackdropPress={() => setIsVisible(false)}
      />
    </Block>
  );
};

export default ShippingMethod;
