import React from 'react';

class Keypad extends React.Component {
  //create 'Keypad' React Component

  passwordEnteringMessage = () => console.log('Entering password...')
  // use console.log to print out text entering password

  render() {
    return (
        <input type="password" onKeyUp={this.passwordEnteringMessage} />
        // render input with the right type(password)
        // event handler on input that listens dor keyup event
    )
  }
}

export default Keypad;
