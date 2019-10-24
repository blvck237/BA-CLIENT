import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// ROUTER
import Login from '../pages/Login';
import Products from '../pages/Products';
import Notfound from '../pages/Notfound';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  render() {
    const { isAuth } = this.state;

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Login} />
            {isAuth ? (
              <>
                <Route path="/login" component={Login} />
                <Route path="/products" component={Products} />
                <Route component={Notfound} />
              </>
            ) : (
              <Redirect to='/' />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Navigation;
