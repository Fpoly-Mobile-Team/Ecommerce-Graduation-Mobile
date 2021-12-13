import {Block} from '@components';
import React from 'react';
import {ViewPropTypes, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import styles from './styles';

const CustomTextInput = function (props) {
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    refCallback,
    ...remainingProps
  } = props;

  const config = useSelector(state => state.config?.data);
  return (
    <Block style={[styles.containerStyle(config), containerStyle]}>
      {LeftComponent}
      <TextInput
        {...remainingProps}
        style={[styles.textInputStyle, style]}
        ref={refCallback}
      />
      {RightComponent}
    </Block>
  );
};

CustomTextInput.defaultProps = {
  LeftComponent: <></>,
  RightComponent: <></>,
};

CustomTextInput.propTypes = {
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  LeftComponent: PropTypes.object,
  RightComponent: PropTypes.object,
  refCallback: PropTypes.func,
};

export default CustomTextInput;
