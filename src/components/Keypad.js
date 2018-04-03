// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component {

  up = () => {
    console.log("Entering password...");
  }

  render () {
    return (
       <input type="password" onKeyUp={this.up} placeholder="password"/>
    )
  }
}

export default Keypad;
