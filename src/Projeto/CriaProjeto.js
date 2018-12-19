import React, { Component } from 'react'
import { connect } from 'react-redux'
import { criaProjeto} from '../store/Actions/ProjetoActions'

class CriaProjeto extends Component {
  state={
    titulo:'',
    conteudo:''
  }
  handleChange = (e) =>{
  this.setState({
    [e.target.id]: e.target.value
  })
}
  handleSubmit = (e) =>{
  e.preventDefault();
  //console.log(this.state);
  this.props.criaProjeto(this.state)
  }

  render() {
    return (
      <div className='cria-projeto container'>
  <form onSubmit={this.handleSubmit} className='formLog'>
      <div className="form-group">
          <input type="title" className="form-control" id="titulo" aria-describedby="titulo" placeholder="Titulo" onChange={this.handleChange}/>
      </div>
      <div className="form-group">
        <textarea className='form-control' id='conteudo' rows='4' placeholder='Conteudo'  onChange={this.handleChange} ></textarea>
      </div>
        <button type="submit" className="btn btn-primary">Criar</button>
</form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    criaProjeto: (Projeto) => dispatch(criaProjeto(Projeto))
  }
}

export default connect(null, mapDispatchToProps)(CriaProjeto)
