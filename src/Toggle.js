import React, { PureComponent } from 'react';

export default class Toggle extends PureComponent {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <div>
        {this.state.on && <h1>Toggle Me</h1>}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}
