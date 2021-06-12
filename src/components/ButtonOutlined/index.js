import * as React from 'react';
import {Button} from 'react-native-paper';
import PropTypes from 'prop-types';

import styles from './styles';

const ButtonOutlined = ({
  disabled,
  label,
  contentStyle,
  labelStyle,
  style,
  ...props
}) => (
  <Button
    disabled={disabled}
    contentStyle={[styles.button, contentStyle]}
    style={[
      styles.buttonWrapper,
      style,
      disabled && styles.disabledButton,
    ]}
    labelStyle={[styles.labelStyle, labelStyle]}
    {...props}>
    {label}
  </Button>
);

ButtonOutlined.defaultProps = {
  mode: 'outlined',
  loading: false,
  disabled: false,
  uppercase: false,
  color: '#fff',
};

ButtonOutlined.propTypes = {
  mode: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
};

export default ButtonOutlined;
