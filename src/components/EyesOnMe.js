// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
  constructor(){
    super()
  }

  focused = () => {
    console.log('Good!')
  }

  blurred = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button onFocus={this.focused} onBlur={this.blurred}></button>
    )
  }
}

export default EyesOnMe
