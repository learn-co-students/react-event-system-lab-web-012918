import React from 'react';

class Keypad extends React.Component {

  keyDownEventFunction = () => {
    console.log('Entering password...')
  }
  render(){
    return (
      <div>
      <input type='password' onKeyUp={this.keyDownEventFunction} />
      </div>
    )
  }
}

export default Keypad;
