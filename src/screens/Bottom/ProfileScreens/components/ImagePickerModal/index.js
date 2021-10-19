import {Block, Text} from '@components';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {useImagePicker} from '@hooks';
import styles from './styles';
import {ModalBox} from '@components';
import {CameraIcon, ImageIcon} from '@assets/svg/common';
import {theme} from '@theme';

const ImagePickerModal = ({
  isVisible,
  setIsVisible,
  openPicker,
  openCamera,
}) => {
  return (
    <ModalBox
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(!isVisible)}
      containerStyle={styles.modalContainer}>
      <Block
        alignCenter
        justifyCenter
        row
        marginHorizontal={20}
        paddingBottom={25}
        space="around">
        <Pressable onPress={openCamera}>
          <Block alignCenter>
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
          <Block alignCenter>
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
    </ModalBox>
  );
};

export default ImagePickerModal;
