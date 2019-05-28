import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Albert'
    }
    console.log('LifecycleB constrcutor');
  }
  
  // MUST HAVE keyword 'static'
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleB componentDidMount');
  }

  render() {
    console.log('LifecycleB render');
    return <div>LifeCycle B</div>
  }
}

export default LifecycleB;
