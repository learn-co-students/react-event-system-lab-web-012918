// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{

  tickle = () => {
    console.log("Entering password...")
  }

  render() {
    return(
      <div>
        <form>
        <label>Password</label>
        <input type="password" onKeyUp={this.tickle}/>
        <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}
