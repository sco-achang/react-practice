import React from 'react';
import './App.css';

/** Components */
import Counter from './components/Counter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';

/** Styles */
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      {/* render 'count'- state; 'incrementCount' - method */}
      <Counter
        render={(count, incrementCount) => (
        <ClickCounterTwo 
          count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
        <HoverCounterTwo 
          count={count} incrementCount={incrementCount} />
        )}
      />
      {/* RenderProps */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User name={ (isLoggedIn) => isLoggedIn ? 'Albert' : 'Guest' } /> */}
    </div>
  );
}

export default App;
