import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

// MATERIAL COMPONENTS
import Box from '@material-ui/core/Box';

// ROUTES
import App from '../App';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Notfound from '../pages/Notfound';

//COMPONENTS
import Footer from './Footer';
import Navigation from './Navigation';

// STYLES
import { styles } from '../styles';

const Layout = () => {
  return (
    <Box bgcolor='grey'>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route component={Notfound} />
        </Switch>
      </Router>
      <Footer />
    </Box>
  );
};

export default Layout;
