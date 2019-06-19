import React, { Component } from 'react';
import './App.css';

/** Components */
import PortalDemo from './components/PortalDemo';

/** Styles */
import './appStyles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* We want to put 'PortalDemo' in 'portal-root' node */}
        <PortalDemo />
      </div>
    );
  }
}

export default App;
