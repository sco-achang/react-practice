import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }
  

  // method
  // will focus on specific input
  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default Input
