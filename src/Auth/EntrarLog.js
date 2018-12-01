import React, { Component } from 'react'

class EntrarLog extends Component {
  state={
    email:'',
    password:''
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
      <div className='Entrar-log container'>
  <form onSubmit={this.handleSubmit} className='formLog'>
      <div className="form-group">
          <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
          <small id="emailHelp" className="form-text text-muted">Nós nunca vamos compartilhar seu e-mail com mais ninguém.</small>
      </div>
      <div className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
      </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
</form>
      </div>
    );
  }
}
export default EntrarLog
