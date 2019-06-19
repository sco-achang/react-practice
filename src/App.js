import React, { Component } from 'react';
import './App.css';

/** Components */
import PostList from './components/PostList';

/** Styles */
import './appStyles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
