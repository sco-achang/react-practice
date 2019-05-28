import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {1
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Albert'
    }
    console.log('LifecycleA constrcutor');
  }
  
  // MUST HAVE keyword 'static'
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleA componentDidMount');
  }

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifeCycle A</div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
