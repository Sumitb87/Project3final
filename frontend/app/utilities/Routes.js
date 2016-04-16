import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
// import AddTipContainer from '../components/AddTipContainer';
import AddTip from '../components/AddTip';
import AddRestaurant from '../components/AddRestaurant';
import About from '../components/About';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='AddTip' component={AddTip} >
        <Route path='/AddTip/:id'  />
      </Route>

      <Route path='AddRestaurant' component={AddRestaurant} />
      <Route path='About' component={About} />



    </Route>
  </Router>

);

export default routes;
