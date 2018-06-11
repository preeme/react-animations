import React, { PureComponent } from 'react';

export default class ToggleRenderProps extends PureComponent {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const { render } = this.props;
    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    );
  }
}
