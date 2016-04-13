import React from 'react';

const SearchLocation = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Find Restaurant by Location:</h3>
        <input onChange={this.props.onChangeLocation} type='text' placeholder='search by location' />
        <h4>Filter by:</h4>
        <label>Outdoor Seating: </label>
        <input onChange={this.props.onChangeSeating} type='checkbox' /><br/><br/>
        <label>Vegetarian-friendly: </label>
        <input onChange={this.props.onChangeDiet} type='checkbox' /><br/><br/>
        <button onClick={this.props.onSubmit} type='button'>Submit!</button>
        <hr/>
      </div>
    );
  }
});

export default SearchLocation;
