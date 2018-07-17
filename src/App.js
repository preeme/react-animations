import React, { PureComponent, Fragment, createContext } from 'react';
import { Transition } from 'react-spring';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';
import './App.css';

const App = () => (
  <UserProvider>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <User />
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>Show/Hide</button>
            <Transition
              from={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
              enter={{ opacity: 1, bg: '#524763', height: '200px' }}
              leave={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
            >
              {on && Header}
            </Transition>
          </Fragment>
        )}
      </Toggle>
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Still in here</h1>
            </Modal>
          </Fragment>
        )}
      </Toggle>
    </div>
  </UserProvider>
);

const Header = styles => (
  <Card
    style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: 'hidden',
      height: styles.height,
    }}
  >
    <h1>Show Me</h1>
    <h3>{styles.bg}</h3>
  </Card>
);

export default App;
