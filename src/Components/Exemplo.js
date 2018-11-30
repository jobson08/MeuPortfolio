import React, { Component } from 'react';

class Exemplo extends Component {
  constructor() {
        super();
        this.state = { valor: 0}
      }
      incremento = () => {
        this.setState({
          valor: this.state.valor + 1});
      };
      decremento = () => {
      this.setState({
          valor: this.state.valor - 1});
      };
  render() {
    return (
      <div className= 'contador'>
          <button className='buton' onClick={this.incremento}>+</button>
          {this.state.valor}
          <button className='buton'  onClick={this.decremento}>-</button>



      </div>
    );
  }
}
export default Exemplo;
