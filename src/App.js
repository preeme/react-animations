import React, { Fragment } from 'react';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
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
  </div>
);

export default App;
