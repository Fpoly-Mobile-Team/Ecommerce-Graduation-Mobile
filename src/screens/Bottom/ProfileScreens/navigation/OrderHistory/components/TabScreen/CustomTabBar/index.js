import {Block, Text} from '@components';
import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import styles from './styles';

function CustomTabBar({state, descriptors, navigation}) {
  console.log('====================================');
  console.log(descriptors);
  console.log('====================================');
  return (
    <Block row justifyCenter alignCenter paddingVertical={15}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.container(isFocused)}>
              <Text style={styles.textStyle(isFocused)}>{label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </Block>
  );
}
export default CustomTabBar;
