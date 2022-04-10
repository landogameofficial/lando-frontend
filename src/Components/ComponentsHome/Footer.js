import React from 'react';
import './Footer.css';
function Footer() {
  const scrollBottom = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  }
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <a href="mailto:landogameofficial@gmail.com" className='footer-subscription-text'>
          <i class="fas fa-envelope"/>&nbsp;landogameofficial@gmail.com
          </a>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Details</h2>
            <a href="https://docs.landogame.com/faq/how-to-partner-in-nft-sales" target="_blank" rel="noreferrer">Participation in NFT Presell</a>
            <a href="https://docs.landogame.com/faq/how-to-partner-in-ido" target="_blank" rel="noreferrer">Participation in IDO</a>
            <a href="https://docs.landogame.com/tokenomics" target="_blank" rel="noreferrer">Tokenomics</a>
            <a href="https://docs.landogame.com/game-details/types-of-the-nfts-in-the-game" target="_blank" rel="noreferrer">NFT Details</a>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Developer</h2>
            <a href="https://docs.landogame.com/concept/overview" target="_blank" rel="noreferrer">Documentation</a>
            <a href="https://docs.landogame.com/concept/problems-and-solutions" target="_blank" rel="noreferrer">Game Contract</a>
            <a href="https://docs.landogame.com/game-details/how-to-earn-money" target="_blank" rel="noreferrer">Earn Rules</a>
            <a href="https://github.com/landogameofficial" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div onClick={scrollBottom} class='social-logo'>
              <div className='main-logo-footer'></div>
              Lando Game
          </div>
          <small class='website-rights'>Lando Game © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link'
              href="https://github.com/landogameofficial"
              target='_blank'
              rel="noreferrer"
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link'
              href="https://www.youtube.com/channel/UCkf0baLkUqnvRQVXWJ1766Q"
              target='_blank'
              aria-label='Youtube'
              rel="noreferrer"
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link'
              href="https://twitter.com/Lando_game"
              target='_blank'
              aria-label='Twitter'
              rel="noreferrer"
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link'
              href="https://t.me/landogame"
              target='_blank'
              aria-label='Telegram'
              rel="noreferrer"
            >
              <i class='fab fa-telegram-plane' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;