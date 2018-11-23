import React, { Component } from 'react';

class Servico extends Component{
  render() {
    return (
      <div>
    {/*=============Our Service Area===========*/}
            <section className='service_area'>
                <div className='container'>
                    <div className='center_title'>
                        <h2>Nossos serviços</h2>
                        <p>Somos uma agência digital criativa. Focado em Marcas Crescentes Online</p>
                    </div>
                    <div className='row service_item_inner'>
                        <div className='col-lg-4'>
                            <div className='service_item'>
                                <i className='fa fa-pencil-ruler'></i>
                                <h4>Produção</h4>
                                <p>Depois de aprovados, os itens criados seguem para a produção. É aqui onde vemos de uma maneira tangível todos os processos anteriores se concretizar.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='service_item'>
                                <i className='fa fa-bullhorn'></i>
                                <h4>Marketing digital</h4>
                                <p>Divulgar sua marca e produto, desenvolver uma imagem corporativa de integridade, manter um bom relacionamento com seu público interno e externo.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='service_item'>
                                <i className='fa fa-rocket'></i>
                                <h4>Publicação</h4>
                                <p>A No website, no Youtube, no Facebook e nos diversos canais disponíveis, aumentando a audiência e potencializando o investimento.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    );
  }
}

export default Servico;
