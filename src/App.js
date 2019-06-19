import React, { Component } from 'react';
import './App.css';

/** Components */
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';

/** Styles */
import './appStyles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
      </div>
    );
  }
}

export default App;
