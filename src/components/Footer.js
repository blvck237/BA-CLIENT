import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


import { styles } from '../styles';

import logo from '../assets/img/logo.svg';

const Footer = () => {
  const classes = styles.layoutStyles();

  return (
    <footer className={classes.footer}>
      <Container
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        maxWidth="lg"
      >
        <Box>
          <img style={{ height: 60, width: 60 }} src={logo} alt="logo" />
        </Box>
        <Typography variant="h6" align="center" gutterBottom>
          The Phone Store
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
