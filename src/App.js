import React, { Fragment } from 'react';
import Toggle from './ToggleRPC';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          {on && <h1> Show Me </h1>}
          <button onClick={toggle}>Show / Hide</button>
        </Fragment>
      )}
    </Toggle>
  </div>
);

export default App;
