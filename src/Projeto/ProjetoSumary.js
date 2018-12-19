import React from 'react'

const ProjetoSumary =({Projeto}) =>{
  return(
    <div className="card border-success mb-3" >
      <div className="card-header">{Projeto.id}</div>
        <div className="card-body text-success">
          <h5 className="card-title">{Projeto.titulo}</h5>
          <p className="card-text">Some quick </p>
        </div>
    </div>

  )
}
export default ProjetoSumary
