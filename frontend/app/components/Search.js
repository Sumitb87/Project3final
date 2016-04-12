import React from 'react';

const Search = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Find Restaurant by Name:</h3>
        <input type='text' placeholder='search by name' />
        <button type='button'>Submit!</button>
      </div>
    );
  }
});

export default Search;
