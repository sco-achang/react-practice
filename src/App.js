import React, { Component } from 'react';
import './App.css';

/** Components */
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

/** Styles */
import './appStyles.css';
import styles from './appStyles.module.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value='Albert'>
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
