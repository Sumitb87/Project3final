import React from 'react';
import {Link} from 'react-router';
// import SearchName from './SearchName';
import Search from './Search';
// import Filters from './Filters';
import DisplayResults from './DisplayResults';
import axios from 'axios';
import Nav from './Nav';

var url = 'http://localhost:3000/';

const Home = React.createClass({
  clickConfirm: function(){
    // e.preventDefault();
    console.log('clickConfirm was called!');
    // var restaurantName = e.target.value;
    // console.log('restaurantName: ', restaurantName);

  },
  getInitialState: function() {
    return {
      ajaxReturn: [],
      searchName: '',
      searchLocation: '',
      searchDiet: '',
      searchBottomless: '',
      searchReservations: '',
      searchPrice:''

    };
  },
  componentDidMount: function() {
    console.log("get all restaurants!");

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

    if (!this.state.searchBottomless){
      this.setState({
        searchBottomless: 'Yes'
      })
    }
    else if (this.state.searchBottomless){
      this.setState({
        searchBottomless: ''
      })
    }
  },
  onChangeDiet: function(e) {
    console.log("onChangeDiet was called!");
    if (!this.state.searchDiet){
      this.setState({
        searchDiet: 'Yes'
      })
    }
    else if (this.state.searchDiet){
      this.setState({
        searchDiet: ''
      })
    }
  },
  onChangeReservations: function(e) {
    console.log("onChangeReservations was called!");
    if (!this.state.searchReservations){
      this.setState({
        searchReservations: 'Yes'
      })
    }
    else if (this.state.searchReservations){
      this.setState({
        searchReservations: ''
      })
    }
  },
  onChangePriceLow: function(e) {
    console.log("onChangePriceLow was called!");

    this.setState({
      searchPrice: 'Low'
    })
  },
  onChangePriceMedium: function(e) {
    console.log("onChangePriceMedium was called!");
    this.setState({
      searchPrice: 'Medium'
    })
  },
  onChangePriceHigh: function(e) {
    console.log("onChangePriceHigh was called!");
    this.setState({
      searchPrice: 'High'
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
    if (this.state.searchPrice) {
      restaurantSearch.price = this.state.searchPrice;
    }


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
    var inlineStyle= {
      color: "red",
      padding: "3px",
      backgroundColor: "blue",
      textAlign: "center"
    }
    return(
      <div>
        <h1 style={inlineStyle}>Brunch Of Places</h1>

        <Nav />

        <Search onChangeLocation={this.onChangeLocation}
          onChangeName={this.onChangeName}
          onChangeBottomless={this.onChangeBottomless}
          onChangeDiet={this.onChangeDiet}
          onChangeReservations={this.onChangeReservations}
          onChangePriceLow={this.onChangePriceLow}
          onChangePriceMedium={this.onChangePriceMedium}
          onChangePriceHigh={this.onChangePriceHigh}
          onSubmit={this.onSubmit}/>

        <DisplayResults route={this.props.children}
          clickConfirm={this.clickConfirm}
          restaurants={this.state.ajaxReturn} />

        <br/><br/>

      </div>
    )
  }
});

export default Home;
