import React from 'react';
//var Form = require('react-bootstrap').Form;
import {Link} from 'react-router';
// this component was built using react-bootstrap:

const AddRestaurant = React.createClass({
  render: function(){
    return(
      <form className="form-inline" role="form">
                <div className="form-group">

                    <input className="form-control" placeholder="Restaurant Name" />
                </div>&nbsp;<br/>
                <div className="form-group">

                    <input className="form-control" placeholder="Restaurant Website" />
                </div>&nbsp;<br/>
                <button type="submit" className="btn btn-primary">Submit</button>&nbsp;

            </form>
    );
  }
});


export default AddRestaurant;
