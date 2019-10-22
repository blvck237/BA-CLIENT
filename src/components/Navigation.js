import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

// ROUTER
import App from '../App';
import Home from '../pages/Home';
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Navigation;
