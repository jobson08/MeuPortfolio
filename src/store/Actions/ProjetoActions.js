export const criaProjeto = (Projeto) =>{
  return (dispatch, getState, {getFirebase, getFirestore} ) =>{

      const firestore = getFirestore();
      firestore.collection('projetos').add({
        ...Projeto,
        autorNome: 'Job',
        autorSobreNome: 'Melo',
        autorId: '123456',
        criaAt: new Date()
      }).then(()=> {
          dispatch({ type: 'CRIA_PROJETO', Projeto});
      }).catch((err)=>{
        dispatch({type: 'ERRO_AO_CRIAR_PROJETO', err});
      })

  }
};
