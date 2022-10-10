import React from 'react'
import Footer from '../../components/footer'
import Icon from '../../components/icons'
import Copyright from '../containers/Copyright'


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
                    <Footer.Title>Contáctanos</Footer.Title>
                        <Footer.Link> Nuestras Sedes </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Row>
                        <Footer.Link ><Icon className="fab fa-facebook-f" /></Footer.Link>
                        <Footer.Link ><Icon className="fab fa-instagram" /></Footer.Link>
                        {/*
                        <Footer.Link ><Icon className="fab fa-youtube" /></Footer.Link>
                        <Footer.Link ><Icon className="fab fa-twitter" /></Footer.Link>
                        */}
                    </Footer.Row>  
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
        <Copyright/>
        </>
        
    )
}