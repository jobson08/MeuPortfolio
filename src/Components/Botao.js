import React, { Component } from 'react';

class Botao extends Component {
  render() {
    return (

        <div className='form-group col-md-12'>
            <button type='submit' value='submit' className='btn submit_btn2 form-control'>{this.props.texto}</button>
        </div>

    );
  }
}

export default Botao;
