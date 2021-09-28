import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useState, useEffect} from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const keyExtractor = (item, index) => item._id.toString();

const LeftBox = ({setTitle, data}) => {
  const [selected, setSelected] = useState(0);
  const config = useSelector(state => state.config?.data);

  useEffect(() => {
    if (data) {
      setTitle({
        title: data[0]?.name,
        _id: data[0]?._id,
      });
    }
  }, [data, setTitle]);

  const _renderItem = ({item, index}) => {
    const backgroundColor =
      index === selected
        ? theme.colors.white
        : `${config?.backgroundcolor}20` || theme.colors.pink;

    const color =
      index === selected ? theme.colors.black : theme.colors.placeholder;

    const backgroundColorLine =
      index === selected ? theme.colors.background : theme.colors.smoke;

    const _onPress = () => {
      setSelected(index);
      setTitle({title: item.name, _id: item._id});
    };
    return (
      <Pressable key={index} onPress={_onPress}>
        <Block
          row
          width={width * 0.3}
          alignCenter
          backgroundColor={backgroundColor}>
          <Block alignCenter justifyCenter>
            <Image source={{uri: item.icon}} style={styles.image} />
            <Text
              color={color}
              center
              marginHorizontal={12}
              marginBottom={5}
              numberOfLines={index === selected ? 3 : 2}
              size={index === selected ? 13 : 12}
              fontType={index === selected ? 'medium' : 'regular'}>
              {item.name}
            </Text>
            <Block
              width={width * 0.3}
              height={1}
              backgroundColor={backgroundColorLine}
            />
          </Block>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block
      width={width * 0.3}
      backgroundColor={`${config?.backgroundcolor}10` || theme.colors.pink}>
      <FlatList
        data={data}
        bounces={false}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
      />
    </Block>
  );
};

export default LeftBox;
