import React from 'react'
import Footer from '../../components/footer'
import Icon from '../../components/icons'
import Copyright from '../containers/Copyright'
import { Link } from 'react-router-dom';
import './Footer.css';


export function FooterContainer() {
    return (
        <>
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Conócenos</Footer.Title>
                        <Footer.Link> Nosotros </Footer.Link>
                        <Footer.Link> Misión y Visión </Footer.Link>
                        <Footer.Link> Filosofía Corporativa </Footer.Link>
                        {/*<Footer.Link href="#">Filosofía Corporativa</Footer.Link>*/}
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Financiamiento</Footer.Title>
                        <Footer.Link href='/financing' > Financia con nosotros </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title> Productos </Footer.Title>
                        <Footer.Link> Agroindustria </Footer.Link>
                        <Footer.Link> Fertilizantes </Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    
                <Footer.Title>Contacto</Footer.Title>
                    <Footer.Row>
                        <Footer.Link > Nuestras Sedes </Footer.Link>
                        
                        <Footer.Linkbtn> 
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
              <i class='fab fa-instagram'  />
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
            </Footer.Wrapper>
        </Footer>
        <Copyright/>
        </>
        
    )
}