import React, { Component } from 'react';

import BannerContato from '../Components/BannerContato'

class Contato extends Component{
  render() {
    return (
      <div>

      <BannerContato />

      {/*================Banner Area =================*/}
      <section className='contact_us_area'>
        <div className='container'>
            {/*<div id='mapBox' className='mapBox row m0'
                data-lat='1.30921'
                data-lon='103.8509813'
                data-zoom='14'
                data-marker='img/map-marker.png'
                data-info='Broadway Hotel'
                data-mlat='1.30921'
                data-mlon='103.8509813'>
            </div>*/}
            <div className='contact_details_inner'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='contact_text'>
                            <div className='main_title'>
                                <h2>Contate-Nos</h2>
                                <p>Há muitas maneiras de nos contatar. Você pode nos enviar uma ligação, ligar para nós ou enviar um e-mail, escolher o que mais lhe convier</p>
                            </div>
                            <div className='contact_d_list'>
                                <div className='contact_d_list_item'>
                                    <a href='#'>(800) 686-6688</a>
                                    <a href='#'>info.deercreative@gmail.com</a>
                                </div>
                                <div className='contact_d_list_item'>
                                    <p>40 Baria Sreet 133/2 <br /> NewYork City, US</p>
                                </div>
                                <div className='contact_d_list_item'>
                                    <p>Horário de funcionamento: 8.00-18.00 seg-sex  <br />Domingo: fechado</p>
                                </div>
                            </div>                  
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='contact_form'>
                            <div className='main_title'>
                                <h2>Entre em contato conosco!</h2>
                                <p>Preencha o formulário abaixo para receber um livre e confidencial.</p>
                            </div>
                            <form className='contact_us_form row' action='contact_process.php' method='post' id='contactForm' novalidate='novalidate'>
                                <div className='form-group col-lg-12'>
                                    <input type='text' className='form-control' id='name' name='name' placeholder='Nome'/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <input type='email' className='form-control' id='email' name='email' placeholder='Email'/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <input type='text' className='form-control' id='subject' name='subject' placeholder='Website'/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <textarea className='form-control' name='message' id='message' rows='1' placeholder='Messagens'></textarea>
                                </div>
                                <div className='form-group col-md-12'>
                                    <button type='submit' value='submit' className='btn submit_btn2 form-control'>Emviar Mensagens</button>
                                </div>
                            </form>
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

export default Contato;
