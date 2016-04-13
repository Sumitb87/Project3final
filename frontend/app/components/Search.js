import React from 'react';

const Search = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Find Restaurant by Location:</h3>
        <input onChange={this.props.onChangeLocation} type='text' placeholder='search by location' />
        <h3>Or Search by Name:</h3>
        <input onChange={this.props.onChangeName} type='text' placeholder='search by name' />
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

export default Search;
