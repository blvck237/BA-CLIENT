import React from 'react';
import Button from '@material-ui/core/Button';

import { buttonStyles } from '../../styles';

const RectangularButton = ({ label }) => {
  const classes = buttonStyles();
  return <Button className={classes.rectangularButton}>{label}</Button>;
};

export default RectangularButton;
