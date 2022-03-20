import React, {useState} from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import Swal from "sweetalert2"
function Footer() {
  

  
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <a href="mailto:vegagunofficial@gmail.com" className='footer-subscription-text'>
          <i class="fas fa-envelope"/>&nbsp;&nbsp;vegagunofficial@gmail.com
          </a>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How to buy </Link>
            <Link to='/'>Details game</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Investors</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
              <div className='navbar-mainlogo'></div>
              Vega Gun
            </Link>
          </div>
          <small class='website-rights'>Vega Gun © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-telegram-plane' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;