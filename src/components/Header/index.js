import {icons} from '@assets';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable} from 'react-native';
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
  return (
    <Block>
      <Text>Header Home</Text>
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
      backgroundColor="#ff5555">
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
export default Header;
