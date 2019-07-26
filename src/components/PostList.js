import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
  state = {
    posts: [],
    errorMsg: ''
  }

  componentDidMount() {
    /** '/posts/:id' */
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => { 
        console.log(res)
        this.setState({posts: res.data})
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: 'Error retrieving data'})
      })
  }

  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div>
        List of Posts
        {/* returns a 'null' if !posts.length - '&&'*/}
        {
          posts.length &&
          posts.map(post => <div key={post.id}>{post.title}</div>)
        }
        { errorMsg && <div>{errorMsg}</div> }
      </div>
    )
  }
}

export default PostList
