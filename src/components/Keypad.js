// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

  text(){
    console.log("Entering password...")
  }

  render(){
    return (
      <input type="password" onKeyUp={this.text}>

      </input>
    )
  }
}

export default Keypad;
