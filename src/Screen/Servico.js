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
                        <p>Somos uma agência digital criativa. Focado em Marcas e produtos Crescentes Online</p>
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

            {/*==================Plano de servico ==============================  */}
<section className='pricing-plane-area section_padding_100_80 clearfix' id='pricing'>
<div className='pricing-plane container'>
<div className='row'>
    <div className='col-12'>
        {/* Heading Text  */}
        <div className='titulo section-heading text-center'>
            <h2>Nossos Planos</h2>
            <div className='line-shape'></div>
        </div>
    </div>
</div>

<div className='row no-gutters'>
    <div className='col-12 col-md-6 col-lg-3'>
        {/* Package Price  */}
        <div className='single-price-plan  text-center'>
            {/* Package Text  */}
            <div className='package-plan'>
                <h5>Plano Starter</h5>
                <div className='ca-price d-flex justify-content-center'>
                    <span>R$</span>
                    <h4>29</h4>
                </div>
            </div>
            <div className='package-description'>
                <p>Up to 10 users monthly</p>
                <p>Unlimited updates</p>
                <p>Free host &amp; domain</p>
                <p>24/7 Support</p>
                <p>10 Unique Users</p>
            </div>
            {/* Plan Button  */}
            <div className='plan-button'>
                <a href='#'>Select Plan</a>
            </div>
        </div>
    </div>
    <div className='col-12 col-md-6 col-lg-3'>
        {/* Package Price  */}
        <div className='single-price-plan text-center'>
            {/* Package Text  */}
            <div className='package-plan'>
                <h5>Plano Basic</h5>
                <div className='ca-price d-flex justify-content-center'>
                    <span>R$</span>
                    <h4>49</h4>
                </div>
            </div>
            <div className='package-description'>
                <p>Up to 10 users monthly</p>
                <p>Unlimited updates</p>
                <p>Free host &amp; domain</p>
                <p>24/7 Support</p>
                <p>10 Unique Users</p>
            </div>
            {/* Plan Button  */}
            <div className='plan-button'>
                <a href='#'>Select Plan</a>
            </div>
        </div>
    </div>
    <div className='col-12 col-md-6 col-lg-3'>
        {/* Package Price  */}
        <div className='single-price-plan  text-center'>
            {/* Package Text  */}
            <div className='package-plan'>
                <h5>Plano Advenced</h5>
                <div className='ca-price d-flex justify-content-center'>
                    <span>R$</span>
                    <h4>69</h4>
                </div>
            </div>
            <div className='package-description'>
                <p>Up to 10 users monthly</p>
                <p>Unlimited updates</p>
                <p>Free host &amp; domain</p>
                <p>24/7 Support</p>
                <p>10 Unique Users</p>
            </div>
            {/* Plan Button  */}
            <div className='plan-button'>
                <a href='#'>Select Plan</a>
            </div>
        </div>
    </div>
    <div className='col-12 col-md-6 col-lg-3'>
        {/* Package Price  */}
        <div className='single-price-plan text-center'>
            {/* Package Text  */}
            <div className='package-plan'>
                <h5>Plano Community</h5>
                <div className='ca-price d-flex justify-content-center'>
                    <span>R$</span>
                    <h4>99</h4>
                </div>
            </div>
            <div className='package-description'>
                <p>Up to 10 users monthly</p>
                <p>Unlimited updates</p>
                <p>Free host &amp; domain</p>
                <p>24/7 Support</p>
                <p>10 Unique Users</p>
            </div>
            {/* Plan Button  */}
            <div className='plan-button'>
                <a href='#'>Select Plan</a>
            </div>
        </div>
    </div>
</div>
</div>
</section>
{/* ==================Plano de servico ============================== */}
      </div>
    );
  }
}

export default Servico;
