import {Block, Text} from '@components';
import {width, height} from '@utils/responsive';
import React, {useRef, useState} from 'react';
import {Animated, Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

function CustomTabBar({state, descriptors, navigation}) {
  const config = useSelector(state => state.config?.data);
  const ref = useRef();
  const [position, setPosition] = useState(0);
  return (
    <Block row justifyCenter alignCenter paddingVertical={15}>
      <ScrollView
        ref={ref}
        horizontal
        onMomentumScrollEnd={({nativeEvent}) => {
          // the current offset, {x: number, y: number}
          const position = nativeEvent.contentOffset;
          // page index
          const index = Math.round(nativeEvent.contentOffset.x / width);

          if (index !== position) {
            // onPageDidChanged
          }
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
              setPosition(index);
              // ref.current.scrollTo({x: index, y: index, animated: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.container(isFocused, config?.backgroundcolor)}>
              <Text style={styles.textStyle(isFocused)}>{label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </Block>
  );
}
export default CustomTabBar;
