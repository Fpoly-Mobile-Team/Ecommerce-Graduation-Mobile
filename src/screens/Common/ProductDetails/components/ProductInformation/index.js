import {icons} from '@assets';
import {Block, Text, WebView} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProductInformation = ({data, isShow = true}) => {
  const navigation = useNavigation();
  return (
    <Block paddingHorizontal={12} marginTop={10}>
      <Block row alignCenter>
        <Image
          source={icons.info}
          style={{
            width: getSize.s(20),
            height: getSize.s(20),
            tintColor: theme.colors.black,
          }}
          resizeMode="contain"
        />
        <Text marginLeft={5} size={16} fontType="bold">
          Thông Tin Sản Phẩm
        </Text>
      </Block>
      <Block height={width + 200} paddingTop={16}>
        <WebView data={data?.description} scrollEnabled={!isShow} />
        <LinearGradient
          colors={['rgba(250,250,250,0.5)', 'rgba(255,255,255,1)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.linearGradient}
        />
        <Pressable
          onPress={() =>
            navigation.navigate(routes.INFORMATION_DETAILS, {
              url: data?.description,
            })
          }>
          <Text center marginTop={10}>
            Xem thêm
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default ProductInformation;

const styles = StyleSheet.create({
  linearGradient: {
    width: width,
    position: 'absolute',
    bottom: 0,
    paddingTop: 50,
  },
});
