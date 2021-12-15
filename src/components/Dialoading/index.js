import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Modal} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {height, width} from '@utils/responsive';
import {useSelector} from 'react-redux';

const Dialoading = ({Modaling, title}) => {
  const [modalVisible, setModalVisible] = Modaling;
  const config = useSelector(state => state.config?.data);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onShow={() => setModalVisible(modalVisible)}>
      <Block
        backgroundColor={theme.colors.black}
        paddingVertical={15}
        paddingHorizontal={10}
        radius={10}
        absolute
        top={height / 3}
        left={width / 3}>
        <SkypeIndicator size={50} color={config?.backgroundcolor} />
        <Text color={theme.colors.white}>{title}</Text>
      </Block>
    </Modal>
  );
};

export default Dialoading;
