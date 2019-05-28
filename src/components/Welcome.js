import React, { Component } from 'react';

// have to access props with 'this' keyword for a 'Class' Component
class Welcome extends Component {
  render() {
    const { name, heroName} = this.props;
    // const {state1, state2} = this.state;

    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    )
  }
}

export default Welcome;