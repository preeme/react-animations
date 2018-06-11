import React from 'react';
import Toggle from './ToggleRPC';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Toggle>
      {({ on, toggle }) => (
        <div>
          {on && <h1> Show Me </h1>}
          <button onClick={toggle}>Show / Hide</button>
        </div>
      )}
    </Toggle>
  </div>
);

export default App;
