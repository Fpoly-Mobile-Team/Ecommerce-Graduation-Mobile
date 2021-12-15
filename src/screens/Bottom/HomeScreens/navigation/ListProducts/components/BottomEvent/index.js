import {Block, Button} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from '../BottomSheet';
import {width} from '@utils/responsive';

const BottomEvent = ({
  refRBSheet,
  idProvince,
  nameProvice,
  idCate,
  nameCate,
  value,
  setValue,
  onPress,
  onPressSort,
  checkCategory,
}) => {
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
            height: checkCategory ? '33%' : '40%',
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <ScrollView>
          <BottomSheet
            idProvince={idProvince}
            name={nameProvice}
            idCate={idCate}
            nameCate={nameCate}
            refRBSheet={refRBSheet}
            value={value}
            setValue={setValue}
            checkCategory={checkCategory}
          />
          <Block row paddingTop={15} alignCenter justifyCenter>
            <Block paddingRight={15}>
              {idProvince || idCate || value ? (
                <Button
                  onPress={onPress}
                  alignCenter
                  height={40}
                  width={width / 2 - 30}
                  title="Khôi phục"
                />
              ) : (
                <Button
                  alignCenter
                  height={40}
                  width={width / 2 - 30}
                  title="Khôi phục"
                  backgroundColor={theme.colors.bgiconheader}
                />
              )}
            </Block>
            <Block paddingLeft={15}>
              {idProvince || idCate || value ? (
                <Button
                  onPress={onPressSort}
                  alignCenter
                  height={40}
                  width={width / 2 - 30}
                  title="Lọc"
                />
              ) : (
                <Button
                  backgroundColor={theme.colors.bgiconheader}
                  alignCenter
                  height={40}
                  width={width / 2 - 30}
                  title="Lọc"
                />
              )}
            </Block>
          </Block>
        </ScrollView>
      </RBSheet>
    </Block>
  );
};

export default BottomEvent;
