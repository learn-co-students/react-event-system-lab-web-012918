// Code EyesOnMe Component Here
import React from 'react'


export default class EyesOnMe extends React.Component {

  render(){
    return(
      <button onFocus={this.focusEyes} onBlur={this.blurEyes} >EYES</button>
    )
  }

  focusEyes(){
    console.log('Good!');
  }

  blurEyes(){
    console.log('Hey! Eyes on me!');
  }
}
