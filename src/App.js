import React from 'react';
import './App.css';

/** Components */
// import { Greet } from './components/Greet'; // name exports - HAS to be SAME
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
// Form
import Form from './components/Form';

/** Styles */
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
    <h1 className="error">Error</h1>
    <h1 className={styles.success}>Success</h1>
    {/* <StyleSheet primary="true"/>
    <Inline /> */}
    {/* <ParentComponent /> */}
    {/* <FunctionClick></FunctionClick> */}
    {/* <Counter></Counter> */}
    {/* <Message /> */}
      {/* GREET components */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Diana" heroName="Wonderwoman"/> */}
      
      {/* WELCOME components */}
      {/* <Welcome name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Welcome>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonderwoman"/> */}
    </div>
  );
}

export default App;
