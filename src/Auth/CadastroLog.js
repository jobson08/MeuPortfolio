import React, { Component } from 'react'

class CadastroLog extends Component {
  state={
    nome:'',
    sobreNome:'',
  }
  handleChange = (e) =>{
  this.setState({
    [e.target.id]: e.target.value
  })
}
  handleSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state);
  }

  render() {
    return (
      <div className='cadastro-log container'>
  <form onSubmit={this.handleSubmit} className='formLog'>
  <div className="form-group">
      <input type="text" className="form-control" id="nome" placeholder="Nome" onChange={this.handleChange}/>
  </div>
  <div className="form-group">
      <input type="text" className="form-control" id="sobreNome" placeholder="Sobre Nome" onChange={this.handleChange}/>
  </div>
      <div className="form-group">
          <input type="email" className="form-control" id="Email" aria-describedby="email" placeholder="email" onChange={this.handleChange}/>
      </div>
      <div className="form-group">
          <input type="password" className="form-control" id="Passwor" placeholder="Password" onChange={this.handleChange}/>
      </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
</form>
      </div>
    );
  }
}
export default CadastroLog
