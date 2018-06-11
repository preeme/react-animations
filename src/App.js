import React from 'react';
import Toggle from './ToggleRenderProps';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Toggle
      render={({ on, toggle }) => (
        <div>
          {on && <h1> Show Me </h1>}
          <button onClick={toggle}>Show / Hide</button>
        </div>
      )}
    />
  </div>
);

export default App;
