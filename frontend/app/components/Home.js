import React from 'react';
import {Link} from 'react-router';
import SearchName from './SearchName';
import SearchLocation from './SearchLocation';
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
      searchName: '',
      searchLocation: ''
    };
  },
  onChangeName: function(e) {
    console.log('onChangeName was called!');
    this.setState({
      searchName: e.target.value
    })
  },
  onChangeLocation: function(e) {
    console.log('onChangeLocation was called!');
    this.setState({
      searchLocation: e.target.value
    })
  },
  onSubmit: function() {
    console.log("onSubmit was called!");

    const name = this.state.searchName;
    const location = this.state.searchLocation;
    //console.log('const name:', name);

    if (name) {
      var url = 'http://localhost:3000/restaurantByName/' + name;
    }
    else if (location) {
      var url = 'http://localhost:3000/restaurantByLocation/' + location;
    }
    // AjaxHelper.getOneRecipe(name)
    axios.get(url)
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
        <SearchName onChangeName={this.onChangeName} onSubmit={this.onSubmit}/>
        <SearchLocation onChangeLocation={this.onChangeLocation} onSubmit={this.onSubmit}/>
        <Filters />
        <DisplayResults />
        <Link to="/AddNewRestaurant"><button onClick={this.clickConfirm}>Add Restaurant</button></Link>
        <br/><br/>

      </div>
    )
  }
});

export default Home;
