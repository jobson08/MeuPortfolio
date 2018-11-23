import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class Footer extends Component{
  render() {
    return (
      <div className='footer-social'>
      {/* ***** Footer Area Start ***** */}
          <footer className='footer-social-icon text-center section_padding_40 clearfix'>
              {/* footer logo */}
              <div className='footer-text'>
                  <h2>MP</h2>
              </div>
              {/* social icon*/}
              <div className='footer-social-icon'>
                  <a href='https://pt-br.facebook.com/'target='_blank'><i className='fab fa-facebook-f' aria-hidden='true'></i></a>
                  <a href='https://twitter.com/login?lang=pt' target='_blank'><i className='fab fa-twitter' aria-hidden='true'></i></a>
                  <a href='https://www.instagram.com/?hl=pt-br' target='_blank'> <i className='fab fa-instagram' aria-hidden='true'></i></a>
                  <a href='https://www.google.com/' target='_blank'><i className='fab fa-google' aria-hidden='true'></i></a>
              </div>
              <div className='footer-menu'>
                  <nav>
                      <ul>
                          <li>  <Link to='/'className='nav-link'>Home </Link></li>
                          <li><Link to='/Sobre' className='nav-link' >Sobre</Link></li>
                          <li><Link to='/Servico' className='nav-link'>Serviço</Link></li>
                          <li>  <Link to='/Contato' className='nav-link'>Contato</Link></li>
                      </ul>
                  </nav>
              </div>
              <div className='copyright-text'>
                  <p>Copyright ©2018 j. Designed  <a href='https://criativaprodutora.com' target='_blank'>Criativa Produtora</a></p>
              </div>
          </footer>
      </div>
    );
  }
}

export default Footer;
