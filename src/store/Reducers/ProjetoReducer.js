const initState ={
  Projetos:[
    {id: '1', titulo: 'Projeto 1', conteudo: 'Comteudo do Projeto 1'},
    {id: '2', titulo: 'Projeto 2', conteudo: 'Comteudo do Projeto 2'},
    {id: '3', titulo: 'Projeto 3', conteudo: 'Comteudo do Projeto 3'},
    {id: '4', titulo: 'Projeto 4', conteudo: 'Comteudo do Projeto 4'},
    {id: '5', titulo: 'Projeto 5', conteudo: 'Comteudo do Projeto 5'}
  ]
}

const ProjetoReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CRIA_PROJETO':
      console.log('cria projeto', action.Projeto)
      return state;
      case 'ERRO_AO_CRIAR_PROJETO':
        console.log('erro ao cria projeto', action.err);
          return state;
    default:
      return state;
  }
}

export default ProjetoReducer
