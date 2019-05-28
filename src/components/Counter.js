import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }

  // Methods
  increment() {
    // setState - asynchronous
    // setState(changeState, callback func. AFTER setState)
    // this.setState({
    //   count: this.state.count + 1
    // }, () => { 
    //   console.log('Callback value', this.state.count) 
    // })

    this.setState((prevState, props) => ({
      // count: prevState.count + props.addValue
      count:prevState.count + 1
    })); 
    // console.log(this.state.count); - synchronous (will be prev 'count value')
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  
  // Render - LifeCycle Method
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
