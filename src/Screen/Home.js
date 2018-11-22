import React, { Component } from 'react';

import Banner from '../Components/Banner'

class Home extends Component{
  render() {
    return (
      <div>

      <Banner />

      {/*================Creative Feature Area =================*/}
      <section className='creative_feature_area'>
          <div className='container'>
              <div className='c_feature_box'>
                  <div className='row'>
                      <div className='col-lg-4'>
                          <div className='c_box_item'>
                              <a href='#'><h4><i className='fa fa-thumbs-up' aria-hidden='true'></i> Confiabilidade</h4></a>
                                                            <p> Sua Marca e seus produtos estarão em boas mãos para ser impulsionado no mercado digital. </p>
                          </div>
                      </div>
                      <div className='col-lg-4'>
                          <div className='c_box_item'>
                              <a href='#'><h4><i className='fa fa-clock' aria-hidden='true'></i> Perícia</h4></a>
                              <p>Temos uma equipe estremamente qualificado para li atender.</p>
                          </div>
                      </div>
                      <div className='col-lg-4'>
                          <div className='c_box_item'>
                              <a href='#'><h4><i className='fa fa-gem' aria-hidden='true'></i> Qualidade</h4></a>
                              <p>O nosso maior esforço é entrega um produto com grande qualidade.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='digital_feature p_100'>
                  <div className='row'>
                      <div className='col-lg-6'>
                          <div className='d_feature_text'>
                              <div className='main_title'>
                                  <h2>Somos uma criativa <br /> Agência Digital focada no crescimento de marcas e produtos on-line</h2>
                              </div>
                              <p>Temos o que  a de inovação para produção de conteudo moderno e com qualidade.</p>
                              <p>Mostre os seus produtos e sua marca e fale para nos  as suas dificuldades para se lançar neste vasto mercado on-line.</p>
                              <a className='read_btn' href='#'>Consulte Mais</a>
                          </div>
                      </div>
                      <div className='col-lg-6'>
                          <div className='d_feature_img'>
                              <img src='img/feature-right.jpg' alt=''/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    {/*================End Creative Feature Area =================*/}
      </div>
    );
  }
}
export default Home;
