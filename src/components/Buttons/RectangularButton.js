import React from 'react';
import Button from '@material-ui/core/Button';

import { buttonStyles } from '../../styles';

const RectangularButton = ({ label, btnAction }) => {
  const classes = buttonStyles();
  return <Button onClick={btnAction()} className={classes.rectangularButton}>{label}</Button>;
};

export default RectangularButton;
