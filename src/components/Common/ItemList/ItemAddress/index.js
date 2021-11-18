import {icons} from '@assets';
import {Block, Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';

const ItemAddress = ({
  full_name,
  address,
  phone,
  index,
  _id,
  ic_default,
  province,
}) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch({
      type: actions.ADD_ADDRESS_DEFAULT,
      body: {
        id: _id,
      },
    });
  };
  return (
    <Pressable onPress={onPress}>
      <Block
        row
        alignCenter
        paddingHorizontal={12}
        marginBottom={10}
        marginTop={index === 0 ? 10 : 0}>
        <Block
          shadow
          width={width - 24}
          backgroundColor={theme.colors.white}
          radius={7}
          padding={12}>
          <Block>
            {ic_default && (
              <Block row alignCenter space="between">
                <Text marginBottom={5} size={12} color={theme.colors.red}>
                  [Mặc định]
                </Text>
                <Image
                  source={icons.flag}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </Block>
            )}
            <Text marginBottom={5} fontType="bold" size={16}>
              {full_name}
            </Text>
          </Block>
          <Text marginBottom={5}>{phone}</Text>
          <Text>{address}</Text>
          <Text>{province}</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemAddress;
