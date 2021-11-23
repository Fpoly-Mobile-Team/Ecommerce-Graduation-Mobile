import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {TextInput} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ListPromo from '../ListPromo';
import styles from './styles';

const BottomSheet = ({refRBSheet}) => {
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      dragFromTopOnly={true}
      customStyles={{
        draggableIcon: {
          backgroundColor: theme.colors.dark,
          width: 100,
        },
        container: {
          height: '70%',
          backgroundColor: theme.colors.lightRount,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Block style={styles.promo} marginBottom={5} marginTop={20}>
        <TextInput
          placeholder="Tìm kiếm mã khuyến mãi.."
          backgroundColor={theme.colors.white}
          style={styles.input}
        />
      </Block>
      <Text size={18} fontType="bold" paddingHorizontal={10}>
        Mã khuyến mãi của bạn
      </Text>
      <ListPromo isClosed={refRBSheet} />
    </RBSheet>
  );
};

export default BottomSheet;
