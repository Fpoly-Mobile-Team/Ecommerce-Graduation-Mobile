import {Block, Button} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from '../BottomSheet';
import {width} from '@utils/responsive';

const BottomEvent = ({refRBSheet}) => {
  return (
    <Block>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        duration={250}
        customStyles={{
          draggableIcon: {
            backgroundColor: theme.colors.black,
            width: 50,
            height: 2,
          },
          container: {
            height: '40%',
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <ScrollView>
          <BottomSheet />
          <Block paddingTop={15} alignCenter>
            <Button
              onPress={() => refRBSheet.current.close()}
              alignCenter
              height={40}
              width={width - 40}
              title="Lọc"
            />
          </Block>
        </ScrollView>
      </RBSheet>
    </Block>
  );
};

export default BottomEvent;
