import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Reg Comp Render');
    const { name } = this.props;
    return (
      <div>
        Regular Component {name}
      </div>
    )
  }
}

export default RegComp
