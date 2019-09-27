import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSelectExample from '../src/controls/reactSelectExample';
import ReactLazyView from '../src/concepts/reactlazy/reactLazyView';
import TestOneView from '../src/concepts/dynamicImports/testOneView';
import LoginView from '../src/components/loginView';
import SigninView from '../src/concepts/hooks/signinView';
import UseEffectView from '../src/concepts/hooks/useEffectView';
import UseContextView from '../src/concepts/hooks/useContextView';


export const UserContext = React.createContext({});

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
      <UserContext.Provider value={{ pageTitle : 'MyTitle'}}>
        <UseContextView />
      </UserContext.Provider>
    </div>
  );
}

export default App;
