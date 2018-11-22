import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import Home from'./Screen/Home'
import Sobre from './Screen/Sobre'
import Servico from './Screen/Servico'

class App extends Component {
  render() {
    return (
  <BrowserRouter>
    <div>
      <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/Sobre' component={Sobre} />
        <Route path='/Servico' component={Servico} />
       <Footer />
    </div>
   </BrowserRouter>
    );
  }
}
export default App;
