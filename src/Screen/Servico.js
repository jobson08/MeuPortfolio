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
                                <i className='fa fa-gem'></i>
                                <h4>Design do site</h4>
                                <p>A fantasia que reconhece o talento e esforço dos melhores web designers, desenvolvedores e agências do mundo.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='service_item'>
                                <i className='fa fa-desktop'></i>
                                <h4>Desenvolvimento de sites</h4>
                                <p>A fantasia que reconhece o talento e esforço dos melhores web designers, desenvolvedores e agências do mundo.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='service_item'>
                                <i className='fa fa-bullhorn'></i>
                                <h4>Marketing digital</h4>
                                <p>A fantasia que reconhece o talento e esforço dos melhores web designers, desenvolvedores e agências do mundo.</p>
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
