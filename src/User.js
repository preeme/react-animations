import React, { PureComponent } from 'react';
import { UserContext } from './UserContext';

export default class User extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>{context.user.name}</h1>
            <h3>{context.user.email}</h3>
            <button onClick={context.logout}>Logout</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
