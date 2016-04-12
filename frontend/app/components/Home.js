import React from 'react';
import {Link} from 'react-router';
import Search from './Search';
import Filters from './Filters';
import DisplayResults from './DisplayResults';

const Home = React.createClass({
  clickConfirm: function(){
    console.log('button was clicked!');
  },
  render: function(){
    return(
      <div>
        <h1>Brunch Of Places</h1>
        <Search />
        <Filters />
        <DisplayResults />
        <Link to="/addRestaurant"><button onClick={this.clickConfirm}>Add Restaurant</button></Link>
        <br/><br/>

      </div>
    )
  }
});

export default Home;
