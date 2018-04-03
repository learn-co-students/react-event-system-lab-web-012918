// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {


  keyUp = () => {
    console.log('Entering password...')
  }
  render() {
    return (
        <form>
          <label> Enter:
            <input onKeyUp={this.keyUp} type="password"/>
          </label>
        </form>
    )
  }
}

export default Keypad;
