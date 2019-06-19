import React, { PureComponent } from 'react'

// Pure Components DO NOT RE-RENDER
// Only Works with 'Class' Based Components
class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp Render');
    const { name } = this.props;
    return (
      <div>
        Pure Component {name}
      </div>
    )
  }
}

export default PureComp
