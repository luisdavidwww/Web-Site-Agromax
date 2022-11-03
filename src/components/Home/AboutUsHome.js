import React from 'react'
import AOS      from 'aos';
import 'aos/dist/aos.css'; 
import '../Home/AboutUsHome.css';



const AboutUsHome = () => {

  const nosotros = "images/filosofiaCorporativa/nosotros.jpg";

  React.useEffect(() => { 
    AOS.init({duration:1500});
    },[]);


  return (
    <>
      <div className='body-container'>
        <div className='us-container' >
            <div data-aos="fade-right" className='us-wrap'>
              <figure>
                <img
                  className='us-img'
                  alt='Sede AgroMax'
                  src={ nosotros }
                />
              </figure>   
            </div>
            <div data-aos="fade-left" className='us-wrap-Info'>
              <h1 className='us-title'> 
                  Nosotros
              </h1>
              <div className='us-text'>
                  <p>
                      Agromáx es una empresa Nacional, que  participa en el mercado de insumos para la 
                      agricultura, comercializando y distribuyendo productos agrícolas para el productor venezolano.
                      Aportando tanto a clientes, distribuidores  y cultivadores, un apoyo técnico y 
                      comercial especializado.
                  </p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsHome;
