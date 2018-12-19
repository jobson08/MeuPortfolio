import React from 'react'

import { NavLink} from 'react-router-dom'

const LogConectado = ()=>{
    return (
      <ul className='navbar-nav '>
        <li className='nav-item'>
          <NavLink to='/Dashboard'className='nav-link'>Dashboard </NavLink>
        </li>
      <li className='nav-item'>
        <NavLink to='/CriaProjeto'className='nav-link'>Novo Projeto </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/'className='nav-link'>Sair</NavLink>
      </li>
      <li className='nav-item'>
        <button type="button" className="LogoLog btn btn-primary">JB</button>
      </li>

      </ul>
    )
  }

export default LogConectado
