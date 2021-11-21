import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {isNumber} from 'lodash';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  handleMargin,
  handlePadding,
  handleRound,
  handleSquare,
} from '../shared';
import styles from './styles';

const Block = ({
  flex,
  flexShrink,
  flexGrow,
  row,
  reverse,
  column,
  shadow,
  backgroundColor,
  space,
  padding,
  margin,
  alignStart,
  alignCenter,
  alignEnd,
  wrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  radius,
  height,
  width,
  square,
  round,
  borderWidth,
  relative,
  absolute,
  top,
  left,
  right,
  bottom,
  borderColor,
  children,
  overflow,
  alignSelf,
  style,
  shadowColor,
  opacity,
  elevation,
  ...props
}) => {
  const blockStyles = [
    flex && styles.block,
    flexShrink && styles.flexShrink,
    flexGrow && styles.flexGrow,
    !flex && {flex: 0},
    width && {width: width},
    height && {height: height},
    row && styles.row,
    reverse && styles.reverse,
    column && styles.column,
    shadow && {
      ...styles.shadow,
      shadowColor: shadowColor ? theme.colors[shadowColor] : theme.colors.black,
      elevation: elevation || 3,
    },
    wrap && {flexWrap: 'wrap'},
    backgroundColor && {
      backgroundColor: theme.colors[backgroundColor] || backgroundColor,
    },
    padding && {...handlePadding(getSize.m(padding))},
    margin && {...handleMargin(getSize.m(margin))},
    alignStart && styles.alignStart,
    alignCenter && styles.alignCenter,
    alignEnd && styles.alignEnd,
    justifyCenter && styles.justifyCenter,
    justifyStart && styles.justifyStart,
    justifyEnd && styles.justifyEnd,
    space && {justifyContent: `space-${space}`},
    paddingTop && {paddingTop: getSize.m(paddingTop)},
    paddingRight && {paddingRight: getSize.m(paddingRight)},
    paddingBottom && {paddingBottom: getSize.m(paddingBottom)},
    paddingLeft && {paddingLeft: getSize.m(paddingLeft)},
    marginBottom && {marginBottom: getSize.m(marginBottom)},
    marginTop && {marginTop: getSize.m(marginTop)},
    marginRight && {marginRight: getSize.m(marginRight)},
    marginLeft && {marginLeft: getSize.m(marginLeft)},
    paddingHorizontal && {paddingHorizontal: getSize.m(paddingHorizontal)},
    paddingVertical && {paddingVertical: getSize.m(paddingVertical)},
    marginHorizontal && {marginHorizontal: getSize.m(marginHorizontal)},
    marginVertical && {marginVertical: getSize.m(marginVertical)},
    radius && {borderRadius: getSize.s(radius)},
    borderWidth && {borderWidth: borderWidth},
    square && {...handleSquare(getSize.s(square))},
    round && {...handleRound(getSize.s(round))},
    isNumber(opacity) && {opacity: opacity},
    borderColor && {
      borderColor:
        theme.colors[borderColor] || theme.colors.border || borderColor,
    },
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    isNumber(top) && {top: getSize.v(top)},
    isNumber(left) && {left: getSize.s(left)},
    isNumber(right) && {right: getSize.s(right)},
    isNumber(bottom) && {bottom: getSize.v(bottom)},
    overflow && {overflow},
    alignSelf && {alignSelf},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

export default Block;
