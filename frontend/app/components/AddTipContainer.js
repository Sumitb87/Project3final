import React from 'react';
import axios from 'axios';

import AddTip from './AddTip';

const AddTipContainer = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: [],
      restaurantName: '',
      author: '',
      timeStamp: '',
      tip: ''
    };
  },
  onChangeRestaurantName: function(e) {
    console.log('onChangeRestaurantName was called!');
    this.setState({
      restaurantName: e.target.value
    })
  },
  render: function(){
    return(
      <div>
        <AddTip onChangeName={this.onChangeRestaurantName}/>
      </div>
    );
  }
});

export default AddTipContainer;
