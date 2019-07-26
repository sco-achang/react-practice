import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {
  state = {
      userId: '',
      title: '',
      body: '',
  }

  // methods
  changeHandler = e => {
    // get a list of all the 'input 'name' attributes with their new 'onChange' respective values
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault(); // avoid page refresh
    console.log(`Form State Input Field Data BEFORE form submit: ${this.state}`);
    axios.post('https://jsonplaceholder.typicode/com/posts', this.state)
      .then(res => console.log(`Form Submitted Data Update: ${res}`))
      .catch(err => console.log(err))
    
  }
  
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            {/* 'name' attribute allows for not having separate 'handelers' for each input */}
            <input 
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="body" value={body} onChange={this.changeHandler} />
          </div>
          <button type='submit'>Submit</button>
        </form>        
      </div>
    )
  }
}

export default PostForm
