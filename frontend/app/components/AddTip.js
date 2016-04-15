import React from 'react';

function AddTip(props) {
  console.log('params: ', props.params);
  return(
    <div>
      <form onSubmit={props.onSubmitTip}>
        <h2>Add Restaurant Tip:</h2>
        <input onChange={props.onChangeAuthor} placeholder='your name' type='text' /><br/><br/>
        <input onChange={props.onChangeTip} placeholder='tip' type='text' /><br/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddTip;
