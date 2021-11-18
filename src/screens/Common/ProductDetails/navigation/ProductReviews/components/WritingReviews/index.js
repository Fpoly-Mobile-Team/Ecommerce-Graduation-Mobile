import {Block, Text, Button} from '@components';
import React from 'react';
import {Image, Pressable, TextInput} from 'react-native';
import {theme} from '@theme';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {Camering} from '@assets/svg/common';
import {useImagePicker} from '@hooks';

const WritingReviews = ({isClosed}) => {
  const {openMultiPicker, pictures} = useImagePicker();

  const _onPress = () => {
    isClosed.current.close();
  };

  const _renderCenter = () => {
    return (
      <Block
        // style={styles.shadowLips}
        backgroundColor={theme.colors.white}
        radius={8}
        paddingTop={0}
        paddingHorizontal={12}
        shadow
        paddingBottom={36}
        shadowColor={theme.colors.black}
        elevation={4}
        marginBottom={32}>
        <TextInput
          style={styles.input}
          placeholder="Nhập nội dung đánh giá"
          multiline
        />
      </Block>
    );
  };

  const _renderMapImages = (item, index) => {
    return (
      <Block key={index} marginRight={12} width={120} height={120}>
        <Image source={{uri: item.path}} style={styles.imgReviews} />
      </Block>
    );
  };

  const _renderCamering = () => {
    return (
      <Block
        width={247 / 2}
        height={247 / 2}
        radius={4}
        alignCenter
        justifyCenter>
        <Pressable onPress={openMultiPicker} style={styles.wrapperCamera}>
          <Camering />
        </Pressable>
        <Text fontType="semibold" size={12}>
          Thêm ảnh
        </Text>
      </Block>
    );
  };

  return (
    <Block flex paddingHorizontal={12} paddingTop={15}>
      <_renderCenter />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <Block row wrap alignCenter>
          {pictures?.map(_renderMapImages)}
        </Block>
        <_renderCamering />
      </ScrollView>
      <Button
        title="GỬI NHẬN XÉT"
        height={45}
        shadow
        style={styles.button}
        elevation={10}
      />
    </Block>
  );
};
export default WritingReviews;
