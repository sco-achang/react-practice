import React from 'react';
import './App.css';

/** Components */
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

/** Styles */
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      {/* SINCE HOC wrapped 'ClickCounter' the 'name' prop is passed down to 
    'withCounter' HOC in this case */}
      <ClickCounter name='Albert' />
      <HoverCounter />
    </div>
  );
}

export default App;
