import React, { PureComponent, Fragment, createContext } from 'react';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import { UserContext } from './UserContext';
import User from './User';
import './App.css';

class UserProvider extends PureComponent {
  state = {
    id: '1',
    name: 'Michael',
    email: 'michael@wavegod.com',
  };

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
    });
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

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
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Still in Modal</h1>
            </Modal>
          </Fragment>
        )}
      </Toggle>
    </div>
  </UserProvider>
);

export default App;
