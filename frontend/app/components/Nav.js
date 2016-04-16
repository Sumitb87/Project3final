import React from 'react';
import {Link} from 'react-router';
import AddRestaurant from './AddRestaurant';
import About from './About';



const Nav = React.createClass({
  render: function(){
    return(
      <div className='cssmenu'>
        <ul>
         <li className='active'><a href='#'><span>Home</span></a></li>
         <Link to="/AddRestaurant"><li><span>Add Restaurant</span></li></Link>
         <Link to="/About"><li><span>About</span></li></Link>
         <li className='last'><a href='#'><span>Contact</span></a></li>
        </ul>
      </div>
    );
  }
});

export default Nav;
