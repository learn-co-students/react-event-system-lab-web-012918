// Code EyesOnMe Component Here
import React from 'react'



class EyesOnMe extends React.Component{
  //create a EyesOnMe React Component

  onFocusFunc = () => console.log('Good!')
  // log good! with focus


  onBlurFunc = () => console.log('Hey! Eyes on me!')
  // log what happens with blur , need function


  render() {
    return(
    <button onFocus={this.onFocusFunc} onBlur={this.onBlurFunc}></button>
    // render a button
    //on button, add event handlers for blur and focus
    // dont forget (this.) with class
  )}
}


export default EyesOnMe;
