import React from 'react';

const Search = React.createClass({
  render: function(){
    return(
      <div className="inputStuff">

        <h3>SEARCH BY LOCATION:</h3>
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

        <h3>Search by Name:</h3>
        <input onChange={this.props.onChangeName} type='text' placeholder='search by name' />
        <hr></hr>

          <div className= "filterDiv">
          <h3 className="filterSearch">FILTER SEARCH:</h3>

            <h1 className="bottomLess">Bottomless</h1>
              <input onChange={this.props.onChangeBottomless} type='checkbox' /><br/><br/>
                <img className="vegImg" src="http://www.friendlyvegan.com/images/logo.gif"></img><br/>
                  <input onChange={this.props.onChangeDiet} type='checkbox' /><br/><br/>

                    <label>Accepting Reservations: </label>
                      <input onChange={this.props.onChangeReservations} type='checkbox' /><br/><br/>

                        <label>Price: </label>
                          <input onChange={this.props.onChangePriceLow} type='radio' name='price' />$ &nbsp;
                            <input onChange={this.props.onChangePriceMedium} type='radio' name='price' />$$ &nbsp;
                              <input onChange={this.props.onChangePriceHigh} type='radio' name='price' />$$$<br/><br/><br/>

                <button onClick={this.props.onSubmit} type='button'>Submit!</button>
      </div>
  </div>
    );
  }
});

export default Search;
