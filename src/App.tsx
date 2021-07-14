import React, { FunctionComponent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Foo:FunctionComponent = () => {

  const [theVal, setTheVal] = useState(0)

  return <div>
    <button onClick={() => setTheVal(theVal + 1)}>+</button>
    <span>{theVal}</span>
    <button onClick={() => setTheVal(theVal - 1)}>-</button>
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Foo />
      </header>
    </div>
  );
}

export default App;
