// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  good = () => {
    console.log('Good!')
  }

  eyesOn = () => {
    console.log('Hey! Eyes on me!')
  }


  render(){
    return (
      <button onFocus={this.good} onBlur={this.eyesOn}/>
    )
  }
}

export default EyesOnMe;
