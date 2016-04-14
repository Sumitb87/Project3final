import React from 'react';

function DisplayResults(props){

  const RestaurantList = props.restaurants.map((restaurant) => {
    return <li key={restaurant._id}>
      Restaurant Name: {restaurant.name}<br/>
      Location: {restaurant.location}<br/>
      Phone Number: {restaurant.phone}<br/>
      Website: {restaurant.website}<br/>
      Vegetarian-friendly: {restaurant.veggie}<br/>
      Accepting Reservations: {restaurant.reservations}<br/>
      Bottomless: {restaurant.bottomless}<br/>
      Price Range: {restaurant.price}<br/>
      Food Rating: {restaurant.foodrating}<br/>
      Drink Rating: {restaurant.drinkrating}<br/>
      Tips: {restaurant.tips}<br/>
      <img src={restaurant.url} />
      </li>;
  });
  return(
    <div>
      <h3>Restaurants:</h3>
      <ul>{RestaurantList}</ul>
    </div>
  );
}

export default DisplayResults;
