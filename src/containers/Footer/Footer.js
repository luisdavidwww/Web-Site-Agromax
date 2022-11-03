import React from 'react'
import Copyright from './Copyright/Copyright'
import { Link } from 'react-router-dom';
import Footer from './footer/index'
import './Footer.css';

const FooterContainer = () => {
    return (
        <>
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title href='/'>Conócenos</Footer.Title>
                        <Footer.Link href='/'  > Nosotros </Footer.Link>
                        <Footer.Link href='/'> Misión y Visión </Footer.Link>
                        <Footer.Link href='/'> Filosofía Corporativa </Footer.Link>
                        {/*<Footer.Link href="#">Filosofía Corporativa</Footer.Link>*/}
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title href='/financing' >Financiamiento</Footer.Title>
                        <Footer.Link href='/financing' > Financia con nosotros </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title href='/products'> Productos </Footer.Title>
                        <Footer.Link href='/products'> Agroindustria </Footer.Link>
                        <Footer.Link href='/products'> Fertilizantes </Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    
                <Footer.Title href='/contact-us' >Contacto</Footer.Title>
                    <Footer.Row>
                        <Footer.Link href='/contact-us'> Nuestras Sedes </Footer.Link>
                        
                        <Footer.Linkbtn href='/contact-us'> 
                                Contáctanos
                        </Footer.Linkbtn>                   
                    </Footer.Row>  
                </Footer.Column>


                {/*
                <Footer.Column>
                    
                <Footer.Title>Social</Footer.Title>
                    <Footer.Row>
                        <Footer.Link ><Icon className="fab fa-facebook-f" /></Footer.Link>
                        <Footer.Link ><Icon className="fab fa-instagram" /></Footer.Link>
                        
                        <Footer.Link ><Icon className="fab fa-youtube" /></Footer.Link>
                        <Footer.Link ><Icon className="fab fa-twitter" /></Footer.Link>
                       
                    </Footer.Row>  
                </Footer.Column>
                     */}
            </Footer.Row>
            
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
              <i className='fab fa-instagram'  />
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
            </Footer.Wrapper>
        </Footer>
        <Copyright/>
        </>
        
    )
}
export default FooterContainer;