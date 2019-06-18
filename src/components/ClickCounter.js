import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component { 

  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
    )
  }
}

// pass the original 'ClickCounter' component to HOC, 'withCounter' 
export default withCounter(ClickCounter, 5)
