import React from 'react';
import './App.css';

/** Components */
// import { Greet } from './components/Greet'; // name exports - HAS to be SAME
import UserGreeting from './components/UserGreeting';

/** Styles */
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      <UserGreeting />
    </div>
  );
}

export default App;
