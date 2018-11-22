import React, { Component } from 'react';

class Botao extends Component {
  render() {
    return (
      <div>
      <button>{this.props.text}</button>
      </div>
    );
  }
}

export default Botao;
