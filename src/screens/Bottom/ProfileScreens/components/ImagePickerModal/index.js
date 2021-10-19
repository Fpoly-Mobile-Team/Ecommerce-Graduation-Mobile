import {CameraIcon, ImageIcon} from '@assets/svg/common';
import {Block, ModalBox, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const ImagePickerModal = ({
  isVisible,
  setIsVisible,
  openPicker,
  openCamera,
}) => {
  return (
    <ModalBox
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(!isVisible)}>
      <Block
        backgroundColor={theme.colors.white}
        height="20%"
        justifyCenter
        style={styles.modalContainer}>
        <Block alignCenter row marginHorizontal={20} space="around">
          <Pressable onPress={openCamera}>
            <Block alignCenter justifyCenter>
              <Block
                backgroundColor={theme.colors.primaryColor}
                padding={15}
                radius={50}>
                <CameraIcon />
              </Block>
              <Text paddingTop={5}>Máy ảnh</Text>
            </Block>
          </Pressable>

          <Pressable onPress={openPicker}>
            <Block alignCenter justifyCenter>
              <Block
                backgroundColor={theme.colors.primaryColor}
                padding={15}
                radius={50}>
                <ImageIcon />
              </Block>
              <Text paddingTop={5}>Thư viện</Text>
            </Block>
          </Pressable>
        </Block>
      </Block>
    </ModalBox>
  );
};

export default ImagePickerModal;
