import React, { Component } from 'react';

class BotaoSecundary extends Component {
  render() {
    return (

        <div className='form-group col-md-12'>
            <button type='submit' value='submit' className="btn btn-secondary submit_btn">{this.props.texto}</button>
        </div>

    );
  }
}

export default BotaoSecundary;
