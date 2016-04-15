import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import AddNewRestaurantContainer from '../components/AddNewRestaurantContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='AddNewRestaurant' component={AddNewRestaurantContainer} />
      <Route path='AddNewRestaurant' component={AddNewRestaurantContainer} />
      <Route path='AddNewRestaurant' component={AddNewRestaurantContainer} />
    </Route>
  </Router>

);

export default routes;
