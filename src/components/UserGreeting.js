import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true,
    }
  }
  
  render({isLoggedIn}) {
    /** 1st Method: if / else */
    // if (isLoggedIn) return (<div>Welcome Albert</div>)
    // else return (<div>Welcome Guest</div>)

    /** 2nd Method Element Variable */
    // let message;
    // if (isLoggedIn) message = <div>Welcome Albert</div>
    // else message = <div>Welcome Guest</div>
    // return <div>{message}</div>

    /** 3rd Method: Ternary conditional operator */
    return (
      isLoggedIn ?
      <div>Welcome Albert</div> :
      <div>Welcome Guest</div>
    )
    /** 4th Method: Short circuit operator: return null on 'non-truthy' condition */
    // return isLoggedIn && <div>Welcome Albert</div>

    // return (
    //   <div>
    //     <div>Welcome Albert</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
