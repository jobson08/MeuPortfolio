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
                                <h2>Contact Us</h2>
                                <p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most</p>
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
                                    <p>Open hours: 8.00-18.00 Mon-Fri <br />Sunday: Closed</p>
                                </div>
                            </div>
                            <div className='static_social'>
                                <div className='main_title'>
                                    <h2>Follow Us:</h2>
                                </div>
                                <ul>
                                    <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                                    <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                                    <li><a href='#'><i className='fa fa-google-plus'></i></a></li>
                                    <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='contact_form'>
                            <div className='main_title'>
                                <h2>Get In Touch With Us!</h2>
                                <p>Fill out the form below to recieve a free and confidential.</p>
                            </div>
                            <form className='contact_us_form row' action='contact_process.php' method='post' id='contactForm' novalidate='novalidate'>
                                <div className='form-group col-lg-12'>
                                    <input type='text' className='form-control' id='name' name='name' placeholder='Name'/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <input type='email' className='form-control' id='email' name='email' placeholder='Email'/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <input type='text' className='form-control' id='subject' name='subject' placeholder='Website'/>
                                </div>
                                <div className='form-group col-lg-12'>
                                    <textarea className='form-control' name='message' id='message' rows='1' placeholder='Message'></textarea>
                                </div>
                                <div className='form-group col-md-12'>
                                    <button type='submit' value='submit' className='btn submit_btn2 form-control'>Send Messages</button>
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
