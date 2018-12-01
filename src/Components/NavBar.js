import React, { Component } from 'react';

import LogConectado from './LogConectado'
import LogDesconectado from './LogDesconectado'

import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
<div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <button className='navbar-toggler' type='button' data-toggle='collapse'
        data-target='#navbarTogglerDemo01'aria-controls='navbarTogglerDemo01'
        aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <Link to='/' className='navbar-brand'>Meu Portfolio</Link>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            <Link to='/'className='nav-link'>Home </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Sobre' className='nav-link' >Sobre</Link>
          </li>
          <li className='nav-item'>
            <Link to='/Servico' className='nav-link'>Serviço</Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contato' className='nav-link'>Contato</Link>
          </li>
        </ul>
        {/*<form className='form-inline my-2 my-lg-0'>
          <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'/>
          <button className='btn btn-outline-primary my-2 my-sm-0' type='submit'>Search</button>
        </form>*/}
        <LogDesconectado />
        <LogConectado />
        </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
