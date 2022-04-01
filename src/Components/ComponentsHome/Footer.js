import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  

  
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <a href="mailto:landogameofficial@gmail.com" className='footer-subscription-text'>
          <i class="fas fa-envelope"/>&nbsp;langogameofficial@gmail.com
          </a>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>How to</h2>
            <Link to='/'>Participation in IDO NFT</Link>
            <Link to='/'>Participation in IDO</Link>
            <Link to='/'>Buy token </Link>
            
            

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Developer</h2>
            <Link to='/'>Documentation</Link>
            <Link to='/'>Game Contract</Link>
            <Link to='/'>Github</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-logo'>
              <div className='main-logo-footer'></div>
              Lando Game
          </div>
          <small class='website-rights'>Lando Game © 2022</small>
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