import React, { Fragment } from 'react';
import Toggle from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>

    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          <button onClick={toggle}>Login</button>
          <Modal on={on} toggle={toggle}>
            <h1>Still in Modal</h1>
          </Modal>
        </Fragment>
      )}
    </Toggle>
    <Portal>
      <h1>I'm a portal </h1>
    </Portal>
  </div>
);

export default App;
