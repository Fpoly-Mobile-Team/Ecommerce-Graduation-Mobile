import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemSearchCategory = ({image, title, index}) => {
  return (
    <Block
      row
      alignCenter
      backgroundColor={theme.colors.smoke}
      radius={10}
      paddingHorizontal={12}
      paddingVertical={18}
      width={(width - 36) / 2}
      marginBottom={10}
      marginLeft={index % 2 === 0 ? 0 : 12}>
      <Block width={'60%'}>
        <Text>{title}</Text>
      </Block>
      <Block width={'40%'} justifyCenter alignCenter>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imglogo}
          resizeMode="contain"
        />
      </Block>
    </Block>
  );
};

export default ItemSearchCategory;
