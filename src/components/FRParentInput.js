import React, { Component } from 'react'
import FRInput from './FRInput';

class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }
  
  // method
  clickHandler = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        {/* We Need to Forward Ref */}
        <FRInput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput
