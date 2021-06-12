import * as React from 'react';
import {Button} from 'react-native-paper';
import PropTypes from 'prop-types';

import styles from './styles';

const ButtonRounded = ({label, contentStyle, labelStyle, ...props}) => (
  <Button
    disabled={disabled}
    contentStyle={[styles.button, contentStyle]}
    style={[styles.buttonWrapper, disabled && styles.disabledButton]}
    labelStyle={[styles.labelStyle, labelStyle]}
    {...props}>
    {label}
  </Button>
);

ButtonRounded.defaultProps = {
  mode: 'contained',
  loading: false,
  disabled: false,
  uppercase: false,
  color: '#DB3022',
};

ButtonRounded.propTypes = {
  mode: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
};

export default ButtonRounded;
