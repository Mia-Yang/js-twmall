import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Add from '/Users/deadfish/Desktop/workspace/js-twmall/src/components/add/Add.js';
import Products from '/Users/deadfish/Desktop/workspace/js-twmall/src/components/products/Products.js';
import Order from '/Users/deadfish/Desktop/workspace/js-twmall/src/components/order/Order.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
          <nav className="nav">
          <ul>
            <li>
              <Link to="/mall">商城</Link>
            </li>
            <li>
              <Link to='/orders'>订单</Link>
            </li>
            <li>
              <Link to='/add-products'>添加商品</Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route exact path='/mall' component={Products} />
            <Route path='/orders' component={Order} />
            <Route path='/add-products' component={Add} />
          </Switch>
        </Router>
        <footer>TW Mall @2018 Created by ForCheng</footer>
      </div>
    );
  }

}
export default App;
