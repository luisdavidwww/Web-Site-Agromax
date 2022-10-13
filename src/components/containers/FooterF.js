import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Copyright from '../containers/Copyright'

function Footer() {
  return (
    <>
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Conócenos</h2>
            <Link to='/'>Nosotros</Link>
            <Link to='/'>Misión y Visión</Link>
            <Link to='/'>Filosofía Corporativa</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Financiamiento</h2>
            <Link to='/'> Financia con nosotros</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/'>Nuestras Sedes </Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
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
