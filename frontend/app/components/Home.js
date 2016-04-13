import React from 'react';
import {Link} from 'react-router';
import Search from './Search';
import Filters from './Filters';
import DisplayResults from './DisplayResults';
import axios from 'axios';

const Home = React.createClass({
  clickConfirm: function(){
    console.log('button was clicked!');
  },
  getInitialState: function() {
    return {
      ajaxReturn: [],
      searchName: ''
    };
  },
  onChangeName: function(e) {
    console.log('onChangeName was called!');
    this.setState({
      searchName: e.target.value
    })
  },
  onSubmit: function() {
    console.log("onSubmit was called!");

    const name = this.state.searchName;
    console.log('const name:', name);

    // AjaxHelper.getOneRecipe(name)
    axios.get('http://localhost:3000/restaurantByName/' + name)
    .then(function(response){
      console.log("Response.data:", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this))
    .catch(function(err){
      console.warn('Error');
      return err;
    })
  },
  render: function(){
    return(
      <div>
        <h1>Brunch Of Places</h1>
        <Search onChangeName={this.onChangeName} onSubmit={this.onSubmit}/>
        <Filters />
        <DisplayResults />
        <Link to="/AddNewRestaurant"><button onClick={this.clickConfirm}>Add Restaurant</button></Link>
        <br/><br/>

      </div>
    )
  }
});

export default Home;
