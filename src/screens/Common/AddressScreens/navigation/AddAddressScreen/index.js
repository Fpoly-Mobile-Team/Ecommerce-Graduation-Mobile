import {Block, Header, Text, Button} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, TextInput} from 'react-native';
import styles from './style';
import {theme} from '@theme';

const AddAddressScreen = () => {
  const navigation = useNavigation();

  return (
    <Block flex backgroundColor={'white'}>
      <Header checkBackground canGoBack title="Thêm địa chỉ mới" />
      <Block
        row
        alignCenter
        shadow
        space="between"
        marginHorizontal={12}
        marginVertical={5}
        padding={10}
        radius={5}>
        <TextInput
          placeholder="Full name"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.inputStyle}
        />
      </Block>
      <Block
        row
        alignCenter
        shadow
        space="between"
        marginHorizontal={12}
        marginVertical={10}
        padding={12}
        radius={5}>
        <TextInput
          placeholder="Address"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.inputStyle}
        />
      </Block>
      <Block
        row
        alignCenter
        shadow
        space="between"
        marginHorizontal={12}
        marginVertical={5}
        padding={10}
        radius={5}>
        <TextInput
          placeholder="City"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.inputStyle}
        />
      </Block>
      <Block
        row
        alignCenter
        shadow
        space="between"
        marginHorizontal={12}
        marginVertical={5}
        padding={10}
        radius={5}>
        <TextInput
          placeholder="PhoneNumber"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.inputStyle}
        />
      </Block>
      <Block
        row
        alignCenter
        shadow
        space="between"
        marginHorizontal={12}
        marginVertical={5}
        padding={10}
        radius={5}>
        <TextInput
          placeholder="Zip Code(Postal Code)"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.inputStyle}
        />
      </Block>
      <Block
        row
        alignCenter
        shadow
        space="between"
        marginHorizontal={12}
        marginVertical={5}
        padding={10}
        radius={5}>
        <TextInput
          placeholder="Country"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.inputStyle}
        />
      </Block>
      <Block paddingHorizontal={12} radius={20}>
        <Button title="THÊM MỚI" height={50} style={styles.btnCheck} />
      </Block>
    </Block>
  );
};

export default AddAddressScreen;
