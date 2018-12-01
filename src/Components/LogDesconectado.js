import React from 'react'

import { NavLink} from 'react-router-dom'

const LogDesconectado = ()=>{
    return (
      <ul className='navbar-nav'>
      <li className='nav-item'>
        <NavLink to='/EntrarLog'className='nav-link'>Entrar</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/CadastroLog'className='nav-link'>Cirar Conta </NavLink>
      </li>
      </ul>
    )
  }

export default LogDesconectado
