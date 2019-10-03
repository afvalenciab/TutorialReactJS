import React from 'react';

class ClassComponents extends React.Component {
  render() {
    return (
      <h3>Hello, {this.props.title}</h3>
    );
  }
}

export default ClassComponents;
