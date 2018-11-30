import React, { Component } from 'react';

class Sobre extends Component{
  render() {
    return (
      <div>
      {/*================Latest News Area =================*/}
          <section className='latest_news_area p_100'>
              <div className='container'>
                  <div className='b_center_title'>
                      <h2>Quem Somos</h2>
                      <p>Somos uma agência digital criativa. Focado em Marcas Crescentes Online</p>
                  </div>
                  <div className='l_news_inner'>
                      <div className='row'>
                          <div className='col-lg-4 col-md-6'>
                              <div className='l_news_item'>
                                  <div className='l_news_img'><a href='#'><img className='img-fluid' src='img/l-news-1.jpg' alt=''/></a></div>
                                  <div className='l_news_content'>
                                      <a href='#'><h4>Nós criamos experiências</h4></a>
                                      <p>A fantasia que reconhece o talento e o esforço dos melhores web designers, desenvolvedores e agências do mundo.</p>
                                      <a className='more_btn' href='#'>Saber Mais</a>
                                  </div>
                              </div>
                          </div>
                          <div className='col-lg-4 col-md-6'>
                              <div className='l_news_item'>
                                  <div className='l_news_img'><a href='#'><img className='img-fluid' src='img/l-news-2.jpg' alt=''/></a></div>
                                  <div className='l_news_content'>
                                      <a href='#'><h4>Simples, rápido e divertido</h4></a>
                                      <p>A fantasia que reconhece o talento e o esforço dos melhores web designers, desenvolvedores e agências do mundo.</p>
                                      <a className='more_btn' href='#'>Saber Mais</a>
                                  </div>
                              </div>
                          </div>
                          <div className='col-lg-4 col-md-6'>
                              <div className='l_news_item'>
                                  <div className='l_news_img'><a href='#'><img className='img-fluid' src='img/l-news-3.jpg' alt=''/></a></div>
                                  <div className='l_news_content'>
                                      <a href='#'><h4>Dispositivo amigável</h4></a>
                                      <p>A fantasia que reconhece o talento e o esforço dos melhores web designers, desenvolvedores e agências do mundo.</p>
                                      <a className='more_btn' href='#'>Saber Mais</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    );
  }
}
export default Sobre;
