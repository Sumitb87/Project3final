import React from 'react';

const SearchLocation = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Or by Location:</h3>
        <input onChange={this.props.onChangeLocation} type='text' placeholder='search by location' />
        <button onClick={this.props.onSubmit} type='button'>Submit!</button>
      </div>
    );
  }
});

export default SearchLocation;
