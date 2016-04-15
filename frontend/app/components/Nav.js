import React from 'react';

const Nav = React.createClass({
  render: function(){
    return(
      <div className='cssmenu'>
        <ul>
         <li className='active'><a href='#'><span>Home</span></a></li>
         <li><a href='#'><span>Products</span></a></li>
         <li><a href='#'><span>Company</span></a></li>
         <li className='last'><a href='#'><span>Contact</span></a></li>
        </ul>
      </div>
    );
  }
});

export default Nav;
