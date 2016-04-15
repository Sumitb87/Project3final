import React from 'react';
import {Link} from 'react-router';
import AddRestaurant from './AddRestaurant';



const Nav = React.createClass({
  render: function(){
    return(
      <div className='cssmenu'>
        <ul>
         <li className='active'><a href='#'><span>Home</span></a></li>
         <Link to="/AddRestaurant"><li><span>Add Restaurant</span></li></Link>



         <li><a href='#'><span>About</span></a></li>
         <li className='last'><a href='#'><span>Contact</span></a></li>
        </ul>
      </div>
    );
  }
});

export default Nav;
