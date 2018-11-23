import React, { Component } from 'react';

class Botao extends Component {
  render() {
    return (

        <div className='form-group col-md-12'>
            <button class="btn btn-secondary submit_btn" type="button">{this.props.texto}</button>
        </div>

    );
  }
}

export default Botao;
