import { Component } from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
  // 'WithCounter' Functionality Component
  class WithCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
  
    // Methods
    incrementCount = () => {
      this.setState(prevState => ({count: prevState.count + incrementNumber }))
    }

    render() {
      // props: ['name'] - this can be injected
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      )
    }
  }
  return WithCounter
}

export default withCounter
