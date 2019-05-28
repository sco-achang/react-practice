import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userName: '',
      comments: '',
      topic: 'React',
    }
  }

  // event passed on automatically for 'onChange'
  handleUsernameChange = (event) => {
    this.setState({ 
      userName: event.target.value
    });
  }

  handleCommentsChange = (event) => {
    this.setState({ 
      comments: event.target.comments
    });  
  }

  handleTopicChange = event => {
    this.setState({
      topic: event.target.topic
    });
  }

  handleSubmit = event => {
    const { userName, comments, topic } = this.state;
    alert(`${userName} ${comments} ${topic}`)
    event.preventDefault();
  }
  
  render() {
    const { userName, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            type='text'
            value={this.state.userName}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;
