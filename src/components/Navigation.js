import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

// MATERIAL COMPONENTS
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// STYLES
import { styles } from '../styles';

import logo from '../assets/img/logo.svg';

const Navigation = () => {
  const classes = styles.navbarStyles();
  const menuList = [{ title: 'Home', path: '/home' }, { title: 'Products', path: '/products' }];
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logo}>
          <img style={{ height: 60, width: 60 }} src={logo} alt="logo" />
          <Typography style={{ marginLeft: 10, color: '#AB171F' }}>Phone Store</Typography>
        </Box>

        <Box>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Connexion
          </Button>
        </Box>
      </Toolbar>

      <Container maxWidth="lg">
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {menuList.map(menuItem => (
            <Link key={menuItem.path} to={menuItem.path} className={classes.toolbarLink}>
              {menuItem.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </>
  );
};
export default Navigation;
