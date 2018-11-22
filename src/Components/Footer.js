import React, { Component } from 'react';

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
                  <a href='#'><i className='fab fa-facebook-f' aria-hidden='true'></i></a>
                  <a href='#'><i className='fab fa-twitter' aria-hidden='true'></i></a>
                  <a href='#'> <i className='fab fa-instagram' aria-hidden='true'></i></a>
                  <a href='#'><i className='fab fa-google' aria-hidden='true'></i></a>
              </div>
              <div className='footer-menu'>
                  <nav>
                      <ul>
                          <li><a href='#'>Home</a></li>
                          <li><a href='#'>Sobre</a></li>
                          <li><a href='#'>Serviço</a></li>
                          <li><a href='#'>Contato</a></li>
                      </ul>
                  </nav>
              </div>
              {/*Foooter Text*/}
              <div className='copyright-text'>
                  {/*} ***** Removing this text is now allowed! This template is licensed under CC BY 3.0 ***** */}
                  <p>Copyright ©2018 j. Designed  <a href='https://colorlib.com' target='_blank'>Colorlib</a></p>
              </div>
          </footer>
        {/* ***** Footer Area Start ***** */}
      </div>
    );
  }
}

export default Footer;
