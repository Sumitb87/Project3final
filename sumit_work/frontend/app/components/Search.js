import React from 'react';


const Search = React.createClass({
  render: function(){



    }

    return(

      <div>
        <h3>  Find Restaurant by Location:</h3>
        <select onChange={this.props.onChangeLocation}>
          <option placeholder='select location' value=''>select location</option>
          <option value='Chelsea'>Chelsea</option>
          <option value='Financial District'>Financial District</option>
          <option value='Flatiron'>Flatiron</option>
          <option value='Hells Kitchen'>Hells Kitchen</option>
          <option value='Meatpacking'>Meatpacking</option>
          <option value='Midtown East'>Midtown East</option>
          <option value='Soho'>Soho</option>
          <option value='Tribeca'>Tribeca</option>
          <option value='Upper East'>Upper East</option>
          <option value='Upper West'>Upper West</option>
        </select>

        <div style>
        <h3>Search by restaurant</h3>
        <input onChange={this.props.onChangeName} type='text' placeholder='search by name' />
        </div>
        <h4>Filter by:</h4>
        <label>Bottomless: </label>
        <input onChange={this.props.onChangeBottomless} type='checkbox' /><br/><br/>
        <label>Vegetarian-friendly: </label>
        <input onChange={this.props.onChangeDiet} type='checkbox' /><br/><br/>
        <label>Accepting Reservations: </label>
        <input onChange={this.props.onChangeReservations} type='checkbox' /><br/><br/>
        <button onClick={this.props.onSubmit} type='button'>Submit!</button>
        <hr/>
      </div>

    );

  }
});

export default Search;
