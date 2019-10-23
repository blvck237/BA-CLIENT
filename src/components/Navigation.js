import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

// ROUTER
import App from '../App';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Notfound from '../pages/Notfound';

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Navigation;
