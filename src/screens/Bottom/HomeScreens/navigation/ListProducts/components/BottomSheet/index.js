import React, {useState} from 'react';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {Animated} from 'react-native';
import {Slider} from 'react-native-elements';
import {ChevronRight} from '@assets/svg/common';

const BottomSheet = () => {
  const [value, setValue] = useState(0);
  return (
    <Block flex paddingVertical={10} paddingLeft={20}>
      <Block paddingTop={10}>
        <Text fontType={'bold'} size={15}>
          Price
        </Text>

        <Block>
          <Block absolute top={-15} right={10}>
            <Text fontType={'bold'} size={14}>
              {value}
              {' triệu'}
            </Text>
          </Block>
          <Slider
            allowTouchTrack={true}
            value={value}
            onValueChange={setValue}
            maximumValue={100}
            minimumValue={0}
            step={1}
            minimumTrackTintColor={theme.colors.paleGreen}
            maximumTrackTintColor={theme.colors.black}
            trackStyle={{
              height: 5,
              borderRadius: 5,
            }}
            thumbProps={{
              Component: Animated.Image,
              source: {
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              },
            }}
            thumbStyle={{
              height: 15,
              width: 15,
              backgroundColor: theme.colors.paleGreen,
            }}
            style={{
              paddingHorizontal: 10,
            }}
          />
          <Block absolute top={26} left={0}>
            <Text fontType={'medium'} size={12}>
              0 VND
            </Text>
          </Block>
          <Block absolute top={26} right={10}>
            <Text fontType={'medium'} size={12}>
              100.000.000 VND
            </Text>
          </Block>
        </Block>
      </Block>
      <Block row space={'between'} paddingTop={40} alignCenter>
        <Text fontType={'bold'} size={15}>
          Khu Vực
        </Text>
        <Block row alignCenter paddingHorizontal={10}>
          <Text size={12} color={theme.colors.lightGray}>
            Chọn ngay
          </Text>
          <Block paddingTop={4}>
            <ChevronRight width={15} height={15} />
          </Block>
        </Block>
      </Block>
      <Block row space={'between'} paddingTop={30} alignCenter>
        <Text fontType={'bold'} size={15}>
          Danh mục
        </Text>
        <Block row alignCenter paddingHorizontal={10}>
          <Text size={12} color={theme.colors.lightGray}>
            Chọn ngay
          </Text>
          <Block paddingTop={4}>
            <ChevronRight width={15} height={15} />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default BottomSheet;
