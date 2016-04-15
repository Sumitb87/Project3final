import React from 'react';
import axios from 'axios';
var url = 'http://localhost:3000/';

// function AddTip(props) {
const AddTip = React.createClass({

  getInitialState: function() {
    return {
      //ajaxReturn: [],
      searchID: this.props.params.id,
      author: '',
      tip: '',
      message: ''
    };
  },
  onChangeAuthor: function(e) {
    console.log('onChangeAuthor was called!');
    this.setState({
      author: e.target.value
    })
  },
  onChangeTip: function(e) {
    console.log('onChangeTip was called!');
    this.setState({
      tip: e.target.value
    })
  },
  onSubmitTip: function(e) {
    e.preventDefault();
    console.log("onSubmitTip was called!");

    var restaurantTip = {
      searchID: this.state.searchID,
      author: this.state.author,
      tip: this.state.tip
    };

    console.log('restaurantTip:', restaurantTip);

    axios.put(url, restaurantTip)
    .then(function(response){
      console.log("Response.data:", response.data);
      this.setState({
        //ajaxReturn: response.data
        message: 'Thank you for the tip!'
      });
    }.bind(this))
    .catch(function(err){
      console.warn('Error');
      return err;
    })
  },
  render: function(){
    console.log(("AddTip this.props.params.id:", this.props.params.id));
    //console.log('params: ', this.props.params);
    return(
      <div>
        <form onSubmit={this.onSubmitTip}>
          <h2>Add Restaurant Tip:</h2>
          <input onChange={this.onChangeAuthor} placeholder='your name' type='text' /><br/><br/>
          <input onChange={this.onChangeTip} placeholder='tip' type='text' /><br/><br/>
          <button type='submit'>Submit</button>
          <h4>{this.state.message}</h4>
        </form>
      </div>
    );
  }
});

export default AddTip;
