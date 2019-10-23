import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { buttonStyles } from '../../styles';


const RectangularButton = ({ label, btnAction, color }) => {
  const classes = buttonStyles();
  return (
    <Button
      style={{ backgroundColor: color }}
      onClick={btnAction()}
      className={classes.rectangularButton}
    >
      {label}
    </Button>
  );
};

export default RectangularButton;

RectangularButton.defaultProps = {
  color: '',
  label: '',
};

RectangularButton.propTypes = {
  color: PropTypes.string,
  btnAction: PropTypes.func.isRequired,
  label: PropTypes.string,
};
