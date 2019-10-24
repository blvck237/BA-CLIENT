import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { buttonStyles } from '../../styles';

const RectangularButton = ({ label, btnAction, color, disabled }) => {
  const classes = buttonStyles();
  return (
    <Button
      style={{ backgroundColor: color }}
      onClick={btnAction()}
      className={classes.rectangularButton}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default RectangularButton;

RectangularButton.defaultProps = {
  color: '',
  label: '',
  disabled: false,
};

RectangularButton.propTypes = {
  color: PropTypes.string,
  btnAction: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
