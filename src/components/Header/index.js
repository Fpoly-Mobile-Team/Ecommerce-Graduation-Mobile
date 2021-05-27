import {icons} from '@assets';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Block
      paddingTop={top + 10}
      paddingHorizontal={12}
      backgroundColor={theme.colors.pink}>
      <Block row alignCenter marginBottom={12} space="between">
        <Block
          flex
          row
          alignCenter
          backgroundColor={theme.colors.white}
          height={40}
          radius={5}
          paddingHorizontal={12}>
          <Image
            source={icons.search}
            style={styles.iconSearch}
            resizeMode="contain"
          />
          <Text marginLeft={5} color={theme.colors.placeholder}>
            Bạn tìm gì hôm nay?
          </Text>
        </Block>
        <Card />
      </Block>
    </Block>
  );
};

const HeaderCommon = ({canGoBack, title}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Block
      row
      alignCenter
      paddingTop={top + 10}
      paddingVertical={16}
      paddingHorizontal={12}
      space="between"
      backgroundColor={theme.colors.pink}>
      {canGoBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.iconback} />
        </Pressable>
      )}
      {title && (
        <Block flex alignCenter>
          <Text fontType="semibold" color="#fff" size={16} numberOfLines={2}>
            {title}
          </Text>
        </Block>
      )}
    </Block>
  );
};

const Card = () => {
  return (
    <Block marginHorizontal={10}>
      <Badge
        status="warning"
        value="1"
        containerStyle={styles.containerStyle}
      />
      <Image source={icons.cart} style={styles.iconcard} resizeMode="contain" />
    </Block>
  );
};

export default Header;
