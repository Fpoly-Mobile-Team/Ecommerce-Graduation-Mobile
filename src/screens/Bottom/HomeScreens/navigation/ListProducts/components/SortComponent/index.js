import {DownArrowFill, Fillter, Sort} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {LayoutAnimation, Platform, Pressable, UIManager} from 'react-native';
import CheckBoxCustom from '../CheckBoxCustom';

const val = [
  {
    key: '1',
    text: 'Giá thấp đến cao',
  },
  {
    key: '2',
    text: 'Giá cao đến thấp',
  },
];

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const SortComponent = ({refRBSheet}) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(' ');

  return (
    <Block>
      <Block
        row
        alignCenter
        backgroundColor={theme.colors.white}
        paddingHorizontal={20}
        paddingVertical={10}
        space={'between'}>
        <Block row alignCenter>
          <Block row alignCenter>
            <Sort />
            <Text color={theme.colors.lightGray} paddingLeft={10} size={14}>
              Sắp xếp
            </Text>
          </Block>
          <Pressable
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setShow(!show);
            }}>
            <Block row paddingLeft={20} alignCenter>
              <Text size={14} fontType={'medium'} marginRight={1}>
                Giá
              </Text>
              <Block paddingTop={3}>
                <DownArrowFill />
              </Block>
            </Block>
          </Pressable>
        </Block>
        <Block>
          <Pressable onPress={() => refRBSheet.current.open()}>
            <Fillter />
          </Pressable>
        </Block>
      </Block>
      {show && (
        <Block marginTop={1} backgroundColor={theme.colors.white} row>
          <CheckBoxCustom PROP={val} value={value} setValue={setValue} />
        </Block>
      )}
    </Block>
  );
};

export default SortComponent;
