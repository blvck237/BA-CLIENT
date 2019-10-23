import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { styles } from '../styles';

const Footer = () => {
  const classes = styles.layoutStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Lorem Ipsum
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {`Copyright © BA-Client  ${new Date().getFullYear()}`}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
