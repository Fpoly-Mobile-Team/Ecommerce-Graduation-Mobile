import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const FeaturedCategory = ({data}) => {
  const navigation = useNavigation();
  const _renderItem = (item, index) => {
    return (
      <Pressable style={styles.btn} key={index}>
        <Image
          source={{uri: item.icon}}
          style={styles.imgcategory}
          resizeMode="contain"
        />
        <Text
          center
          numberOfLines={2}
          size={12}
          marginHorizontal={2}
          fontType="bold">
          {item.name}
        </Text>
      </Pressable>
    );
  };

  const _onPress = () => {
    navigation.navigate(routes.CATEGORYSCREENS);
  };

  return (
    <Block paddingHorizontal={12}>
      <Block row alignCenter marginBottom={16} space="between">
        <Text size={16} fontType="bold">
          Danh Mục Nổi Bật
        </Text>
        <Pressable style={styles.stylebtn} onPress={_onPress}>
          <Text size={12}>Xem tất cả</Text>
          <Image
            source={icons.next}
            style={styles.iconnext}
            resizeMode="contain"
          />
        </Pressable>
      </Block>

      <Block
        row
        wrap
        shadow
        alignCenter
        radius={10}
        marginBottom={10}
        paddingVertical={16}
        backgroundColor="white">
        {data?.map(_renderItem)}
      </Block>
    </Block>
  );
};

export default FeaturedCategory;
