// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  pressingKeys = () => {
    console.log('Entering password...')
  }

  render(){
    return (
      <input type="password" onKeyUp={this.pressingKeys}/>
    )
  }
}

export default Keypad;
