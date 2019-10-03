import React from 'react';

class ToggleEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };

    //Es necesaria para poder pasar el conexto al hanle, esto si se utiliza una función normal con arrow Function no es necesario
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { isToggleOn: !state.isToggleOn };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default ToggleEvent;
