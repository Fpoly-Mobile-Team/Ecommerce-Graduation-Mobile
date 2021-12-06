import {icons} from '@assets';
import {Block, Button} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import ModalChooseType from '../ModalChooseType';
import styles from './styles';

const ChooseTypeProduct = ({option, image, productStock, price, item}) => {
  const user = useSelector(state => state.tokenUser?.data);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const navigation = useNavigation();

  const onPressBuy = () => {
    if (user) {
      setIsVisible(true);
      setTitle('MUA HÀNG');
    } else {
      navigation.navigate(routes.AUTHFORSCREEN);
    }
  };

  const onPressAddCart = () => {
    if (user) {
      setIsVisible(true);
      setTitle('THÊM VÀO GIỎ HÀNG');
    } else {
      navigation.navigate(routes.AUTHFORSCREEN);
    }
  };

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
            onPress={onPressAddCart}
            height={45}
            style={{
              ...styles.btn,
              ...styles.button,
            }}
            title="Thêm vào giỏ hàng"
            titleStyle={{color: '#3f4b53'}}
          />
        </Block>

        <Block flex>
          <Button
            height={45}
            style={styles.btn}
            title="Mua ngay"
            onPress={onPressBuy}
          />
        </Block>
      </Block>
      <ModalChooseType
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        image={image}
        productStock={productStock}
        price={price}
        options={option}
        title={title}
        item={item}
      />
    </Block>
  );
};

export default ChooseTypeProduct;
