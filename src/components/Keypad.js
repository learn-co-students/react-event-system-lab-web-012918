// Code Keypad Component Here

import React from 'react'

class Keypad extends React.Component{
  log = () => {
    console.log('Entering password...');
  }

  render(){
    return(
      <input type="password" onKeyUp={this.log}/>
    )
  }
}

export default Keypad
