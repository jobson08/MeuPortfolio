import React from 'react'

import  ProjetoSumary from './ProjetoSumary'

const ProjetoLista = ({Projetos}) =>{
  return(
<div className='Projeto-lista section'>
  {Projetos && Projetos.map(Projeto =>{
    return (
      <ProjetoSumary Projeto={Projeto} key={Projeto.id} />
    )
  })}
</div>
  )
}
export default ProjetoLista
