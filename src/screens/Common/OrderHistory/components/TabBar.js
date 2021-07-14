import {theme} from '@theme';
import React, {useRef} from 'react';
import {Block, Text} from '@components';
import {Pressable} from 'react-native';
function MyTabBar({state, descriptors, navigation}) {
  return (
    <Block
      row
      backgroundColor={theme.colors.transparent}
      height={70}
      paddingTop={10}
      justifyCenter
      alignCenter>
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
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                color: isFocused ? theme.colors.white : theme.colors.black,
                backgroundColor: isFocused
                  ? theme.colors.pink
                  : theme.colors.transparent,
                paddingHorizontal: 20,
                paddingVertical: 7,
                borderRadius: 20,
              }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </Block>
  );
}
export default MyTabBar;
