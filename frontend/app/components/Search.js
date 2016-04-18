import React from 'react';

const Search = React.createClass({
  render: function(){
    return(
      <div className="inputStuff">

        <h3>SEARCH BY LOCATION:</h3>
        <h3>Find Restaurant by Location:</h3>
        <hr></hr>

//whole filter by section.//

          <div className= "filterDiv">
          <h3>FILTER SEARCH:</h3>
            <h1 className="bottomLess">Bottomless</h1>
              <input onChange={this.props.onChangeBottomless} type='checkbox' /><br/><br/><br/>

                <img className="vegImg" src="http://www.friendlyvegan.com/images/logo.gif"></img><br/><br/>
                  <input onChange={this.props.onChangeDiet} type='checkbox' /><br/><br/><br/>

                    <h3>Accepting Reservations: </h3><br/><br/>
              <br/><br/>
              <input onChange={this.props.onChangeReservations} type='checkbox' /><br/><br/><br/>

                  <h3>Price: </h3>
                      <input onChange={this.props.onChangePriceLow} type='radio' name='price' />$ &nbsp;
                        <input onChange={this.props.onChangePriceMedium} type='radio' name='price' />$$ &nbsp;
                          <input onChange={this.props.onChangePriceHigh} type='radio' name='price' />$$$<br/><br/><br/>
//main submit button//
                <button className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</button>

        <div className= "filterDiv">
          <h3>FILTER SEARCH:</h3>
          <h1 className="bottomLess">Bottomless</h1>
          <input onChange={this.props.onChangeBottomless} type='checkbox' />
          <br/><br/><br/>
          <img className="vegImg" src="http://www.friendlyvegan.com/images/logo.gif"></img>
          <br/><br/>
          <input onChange={this.props.onChangeDiet} type='checkbox' />
          <br/><br/><br/>

          <h3>Accepting Reservations: </h3><br/><br/>
          <br/><br/>
          <input onChange={this.props.onChangeReservations} type='checkbox' />
          <br/><br/><br/>

          <h3>Price: </h3>
          <input onChange={this.props.onChangePriceLow} type='radio' name='price' />$ &nbsp;
          <input onChange={this.props.onChangePriceMedium} type='radio' name='price' />$$ &nbsp;
          <input onChange={this.props.onChangePriceHigh} type='radio' name='price' />$$$
          <br/><br/><br/>

          <button className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</button>
        </div>
      </div>
  </div>
    );
  }
});

export default Search;
