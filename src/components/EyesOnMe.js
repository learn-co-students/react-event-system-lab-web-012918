// Code EyesOnMe Component Here

import React from 'react'


class EyesOnMe extends React.Component {

  focused = () => console.log('Good!')
  notFocused = () => console.log('Hey! Eyes on me!')

  render() {
    return(
      <button type="submit" onFocus={this.focused} onBlur={this.notFocused}/>
    )
  }
}

export default EyesOnMe
