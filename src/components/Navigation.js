import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import Box from '@material-ui/core/Box';

// ROUTER
import Login from '../pages/Login';
import Products from '../pages/Products';
import Notfound from '../pages/Notfound';

import { connect } from 'react-redux';
import { isAuthSelector } from '../redux/selectors';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  render() {
    const { isAuth } = this.props;

    return (
      <Router>
        <Box my={30}>
          <Switch>
            <Route exact path="/" component={Login} />
            {isAuth ? (
              <>
                <Route path="/login" component={Login} />
                <Route path="/products" component={Products} />
                <Route component={Notfound} />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        </Box>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: isAuthSelector(state),
  };
};

export default connect(mapStateToProps)(Navigation);

