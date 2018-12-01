import React, { Component } from 'react';

import BannerContato from '../Components/BannerContato'
import Botao from'../Components/Botao'


class Contato extends Component{
  state={
    nome:'',
    email:'',
    password:''
  }
  handleChange = (e) =>{
  this.setState({
    [e.target.id]: e.target.value
  })
}
  handleSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state);
  }

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
                                    <a href='#'>criativaprodutora@gmail.com</a>
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
                            <form onSubmit={this.handleSubmit} className='contact_us_form row' action='contact_process.php' method='post' id='contactForm' >
                                <div className='form-group col-lg-12'>
                                    <input type='text' className='form-control' id='nome' name='nome' placeholder='Nome' onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <input type='email' className='form-control' id='email' name='email' placeholder='Email' onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <input type='text' className='form-control' id='Website' name='Website' placeholder='Website' onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <textarea className='form-control' name='message' id='message' rows='1' placeholder='Messagens'  onChange={this.handleChange} ></textarea>
                                </div>
                                <Botao type="submit" texto='Emviar Mensagens' />
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
