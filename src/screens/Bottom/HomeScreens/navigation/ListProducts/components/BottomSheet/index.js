import React, {useState} from 'react';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {Animated, Pressable} from 'react-native';
import {Slider} from 'react-native-elements';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {ChevronRight} from '@assets/svg/common';
import {useSelector} from 'react-redux';

const BottomSheet = ({
  idProvince,
  name,
  idCate,
  nameCate,
  refRBSheet,
  value,
  setValue,
  checkCategory,
  checkCategorySub,
}) => {
  const navigation = useNavigation();
  const config = useSelector(state => state.config?.data);

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
            minimumTrackTintColor={config?.backgroundcolor}
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
              backgroundColor: config?.backgroundcolor,
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

        {idProvince ? (
          <Pressable
            onPress={() => {
              refRBSheet.current.close();
              setTimeout(() => {
                navigation.navigate(routes.CHOOSE_PROVICE);
              }, 500);
            }}>
            <Block row alignCenter paddingHorizontal={10}>
              <Text size={14} color={theme.colors.black} fontType="medium">
                {name}
              </Text>
            </Block>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              refRBSheet.current.close();
              setTimeout(() => {
                navigation.navigate(routes.CHOOSE_PROVICE);
              }, 500);
            }}>
            <Block row alignCenter paddingHorizontal={10}>
              <Text size={12} color={theme.colors.lightGray}>
                Chọn ngay
              </Text>
              <Block paddingTop={4}>
                <ChevronRight width={15} height={15} />
              </Block>
            </Block>
          </Pressable>
        )}
      </Block>
      {checkCategory ? null : (
        <Block row space={'between'} paddingTop={30} alignCenter>
          <Text fontType={'bold'} size={15}>
            Danh mục
          </Text>
          {idCate ? (
            <Pressable
              onPress={() => {
                refRBSheet.current.close();
                setTimeout(() => {
                  navigation.navigate(routes.CHOOSE_CATEGORY);
                }, 500);
              }}>
              <Block row alignCenter paddingHorizontal={10}>
                <Text size={14} color={theme.colors.black} fontType="medium">
                  {nameCate}
                </Text>
              </Block>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                refRBSheet.current.close();
                setTimeout(() => {
                  navigation.navigate(routes.CHOOSE_CATEGORY);
                }, 500);
              }}>
              <Block row alignCenter paddingHorizontal={10}>
                <Text size={12} color={theme.colors.lightGray}>
                  Chọn ngay
                </Text>
                <Block paddingTop={4}>
                  <ChevronRight width={15} height={15} />
                </Block>
              </Block>
            </Pressable>
          )}
        </Block>
      )}
    </Block>
  );
};

export default BottomSheet;
