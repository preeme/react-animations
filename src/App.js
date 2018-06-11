import React, { Fragment } from 'react';
import Toggle from './ToggleRPC';
import Portal from './Portal';

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
    <Portal>
      <h1>I'm a portal </h1>{' '}
    </Portal>
  </div>
);

export default App;
