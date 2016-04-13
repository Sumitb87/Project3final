import React from 'react';

function DisplayResults(props){

  const RestaurantList = props.restaurants.map((restaurant) => {
    return <li key={restaurant._id}>
      Restaurant Name: {restaurant.name}<br/>
      Location: {restaurant.location}<br/>
      Accepting Reservations: {restaurant.reservation}<br/>
      Outdoor Seating: {restaurant.seating}<br/>
      Price Range: {restaurant.price}<br/>
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
