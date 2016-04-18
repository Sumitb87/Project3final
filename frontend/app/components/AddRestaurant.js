import React from 'react';
import {Link} from 'react-router';
// this component was built using react-bootstrap:

const AddRestaurant = React.createClass({
  getInitialState: function(){
    return {
      RestaurantName: '',
      RestaurantWebsite: '',
      MailLink: ''
    }
  },
  onChangeName: function(e){
    console.log('onChangeName was called!');
    this.setState({
      RestaurantName: e.target.value
    });
  },
  onChangeWebsite: function(e){
    console.log('onChangeWebsite was called!');
    this.setState({
      RestaurantWebsite: e.target.value
    });
  },
  buildMailToLink: function(){
    console.log('buildMailToLink was called!');
    var MailLink = 'mailto:brunchofplaces@gmail.com?subject=Please add restaurant' +
      '&body=Restaurant Name: ' + this.state.RestaurantName + '\n' +
      'Restaurant Website: ' + this.state.RestaurantWebsite;
    this.setState({
      MailLink: encodeURI(MailLink)
    });
  },
  render: function(){
    return(
      <form className="form-inline" role="form" action={this.state.MailLink} method="POST">
        <div className="form-group">
          <input onChange={this.onChangeName} className="form-control" placeholder="Restaurant Name" />
        </div>&nbsp;<br/>
        <div className="form-group">
          <input onChange={this.onChangeWebsite} className="form-control" placeholder="Restaurant Website" />
        </div>&nbsp;<br/>
        <button type="submit" onClick={this.buildMailToLink} className="btn btn-primary">Submit</button>&nbsp;
      </form>
    );
  }
});

export default AddRestaurant;
