import React from 'react';
import {Link} from 'react-router';
import AddTip from './AddTip';

function DisplayResults(props){
var restName = {
  color: "black",
  FontSize: "25px",
  textAlign: "center",
  padding: "10px",
  borderTop: "2px solid red",
  textDecoration: "none"
}
var itsME = {
  color: "black",
  FontSize: "15px",
  padding: "10px",

  textDecoration: "none"
}
var itsME2 = {
  color: "black",
  FontSize: "15px",
  textAlign: "center",
  paddingRight: "30px",
  display: "inline"
}

var spanME = {
  paddingRight: "10px",
  paddingLeft: "200px",
  textAlign: "center",
  margin: "auto",
  fontSize: "22px"
}


  const RestaurantList = props.restaurants.map((restaurant) => {
    return <section key={restaurant._id}>

    <h2 style={restName}>{restaurant.name}</h2>


  <span style={spanME}>{restaurant.phone}</span>

      <span style={spanME}>{restaurant.location}</span>



    <span style={spanME}> Website: {restaurant.website}</span>

<div>
      Vegetarian-friendly: {restaurant.veggie}<br/>
      Accepting Reservations: {restaurant.reservations}<br/>
      Bottomless: {restaurant.bottomless}<br/>
      Price Range: {restaurant.price}<br/>
</div>
      Food Rating: {restaurant.foodrating}<br/>
      Drink Rating: {restaurant.drinkrating}<br/>
      Tips: {restaurant.tips}<br/>
<<<<<<< HEAD
      <img src={restaurant.url} />

      </section>;
=======
      <img src={restaurant.url} /><br/>

      <Link to={`/AddTip/${restaurant.name}`}><button >Add Restaurant Tip</button></Link>




      <br/><br/>




      </li>;
>>>>>>> 80be1c0b661495bab42a38c2b23821a3f7d59593
  });
  return(
    <div>
      <ul>{RestaurantList}</ul>
    </div>
  );
}

export default DisplayResults;
