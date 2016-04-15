import React from 'react';
import {Link} from 'react-router';
// import SearchName from './SearchName';
import Search from './Search';
// import Filters from './Filters';
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
      searchLocation: '',
      searchDiet: '',
      searchBottomless: '',
      searchReservations: '',
      searchPrice: ''

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
  onChangeBottomless: function(e) {
    console.log("onChangeBottomless was called!");
    this.setState({
      searchBottomless: 'Yes'
    })
  },
  onChangeDiet: function(e) {
    console.log("onChangeDiet was called!");
    this.setState({
      searchDiet: 'Yes'
    })
  },
  onChangeReservations: function(e) {
    console.log("onChangeReservations was called!");
    this.setState({
      searchReservations: 'Yes'
    })
  },
  onSubmit: function() {
    console.log("onSubmit was called!");

    // const name = this.state.searchName;
    // const location = this.state.searchLocation;
    //console.log('const name:', name);

    var restaurantSearch = {};
    if (this.state.searchName) {
      restaurantSearch.name = this.state.searchName;
    }
    if (this.state.searchLocation) {
      restaurantSearch.location = this.state.searchLocation;
    }
    if (this.state.searchBottomless) {
      restaurantSearch.bottomless = this.state.searchBottomless;
    }
    if (this.state.searchDiet) {
      restaurantSearch.veggie = this.state.searchDiet;
    }
    if (this.state.searchReservations) {
      restaurantSearch.reservations = this.state.searchReservations;
    }


    var url = 'http://localhost:3000/';
    console.log('restaurantSearch:', restaurantSearch);

    axios.post(url, restaurantSearch)
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
      

        <Search onChangeLocation={this.onChangeLocation}
          onChangeName={this.onChangeName}
          onChangeBottomless={this.onChangeBottomless}
          onChangeDiet={this.onChangeDiet}
          onChangeReservations={this.onChangeReservations}
          onSubmit={this.onSubmit}/>

        <DisplayResults restaurants={this.state.ajaxReturn} />
        <Link to="/AddNewRestaurant"><button onClick={this.clickConfirm}>Add Restaurant</button></Link>
        <br/><br/>

      </div>
    )
  }
});

export default Home;
