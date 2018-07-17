import React, { PureComponent } from 'react';
import { UserContext } from './UserContext';

export default class UserProvider extends PureComponent {
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
