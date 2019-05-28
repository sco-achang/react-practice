import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userName: ''
    }
  }

  // event passed on automatically for 'onChange'
  handleUsernameChange = (event) => {
    this.setState({ 
      userName: event.target.value
    });
  }
  
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input type='text' value={this.state.userName} onChange={this.handleUsernameChange}/>
        </div>
      </form>
    )
  }
}

export default Form;
