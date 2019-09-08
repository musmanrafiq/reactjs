import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSelectExample from '../src/controls/reactSelectExample';
import ReactLazyView from '../src/concepts/reactlazy/reactLazyView';
import TestOneView from '../src/concepts/dynamicImports/testOneView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestOneView />
    </div>
  );
}

export default App;
