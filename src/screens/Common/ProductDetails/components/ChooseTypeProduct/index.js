import {icons} from '@assets';
import {Block, Button} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';

const ChooseTypeProduct = () => {
  const navigation = useNavigation();
  const ActionsButton = () => (
    <Pressable onPress={() => navigation.navigate(routes.CHATBOX)}>
      <Block
        width={(width - 24) * 0.13}
        radius={5}
        alignCenter
        justifyCenter
        backgroundColor={theme.colors.smoke}
        height={45}
        marginRight={8}>
        <Image
          source={icons.message}
          style={styles.iconMessage}
          resizeMode="contain"
        />
      </Block>
    </Pressable>
  );

  return (
    <Block backgroundColor="white">
      <Block height={0.5} backgroundColor={theme.colors.smoke} />
      <Block
        row
        alignCenter
        paddingHorizontal={12}
        paddingVertical={10}
        space="between">
        <Block row alignCenter>
          <ActionsButton />
          <Button
            height={45}
            style={{
              ...styles.btn,
              width: (width - 24) * 0.5,
              backgroundColor: theme.colors.smoke,
              marginRight: 8,
            }}
            title="Thêm vào giỏ hàng"
            titleStyle={{color: '#3f4b53'}}
          />
        </Block>

        <Block flex>
          <Button height={45} style={styles.btn} title="Mua ngay" />
        </Block>
      </Block>
    </Block>
  );
};

export default ChooseTypeProduct;
