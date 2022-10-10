import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Copyright from '../containers/Copyright'

function Footer() {
  return (
    <>
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Solicita tu algo para nosotros
        </p>
        <p className='footer-subscription-text'>
          Mantén la comunicación con nosotros
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Conócenos</h2>
            <Link to='/'>Nosotros</Link>
            <Link to='/'>Misión y Visión</Link>
            <Link to='/'>Filosofía Corporativa</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Financiamiento</h2>
            <Link to='/'> Financia con nosotros</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/'>Nuestras Sedes </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
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
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Copyright/>
    </>
  );
}

export default Footer;
