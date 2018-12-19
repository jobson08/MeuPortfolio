import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import Home from'./Screen/Home'
import Sobre from './Screen/Sobre'
import Servico from './Screen/Servico'
import Contato from'./Screen/Contato'
import Dashboard from './PainelControle/Dashboard'
import ProjetoDetalhe from './Projeto/ProjetoDetalhe'
import EntrarLog from './Auth/EntrarLog'
import CadastroLog from './Auth/CadastroLog'
import CriaProjeto from './Projeto/CriaProjeto'

class App extends Component {
  render() {
    return (
  <BrowserRouter>
    <div>

      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Sobre' component={Sobre} />
        <Route path='/Servico' component={Servico} />
        <Route path='/Contato' component={Contato} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Projeto/:id' component={ProjetoDetalhe} />
        <Route path='/EntrarLog' component={EntrarLog} />
        <Route path='/CadastroLog' component={CadastroLog} />
        <Route path='/CriaProjeto' component={CriaProjeto} />

      </Switch>
       <Footer />

    </div>
   </BrowserRouter>
    );
  }
}
export default App;
