import React from 'react';
import {Link} from 'react-router';
import AddTip from './AddTip';

function DisplayResults(props){
  console.log('DisplayResults props.restaurants:', props.restaurants);

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
      Tips: {restaurant.tips.map((each_tip) => {
        return <p>{each_tip.author}: {each_tip.tip}</p>;
      })}
      <img src={restaurant.url} /><br/>
      <Link to={`/AddTip/${restaurant._id}`}><button >Add Restaurant Tip</button></Link>
      <br/><br/>
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
