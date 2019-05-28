import React from 'react';
import './App.css';

/** Components */
// Form
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

/** Styles */
import './appStyles.css';
// import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
    <LifecycleA />
    {/* <Form /> */}
    </div>
  );
}

export default App;
