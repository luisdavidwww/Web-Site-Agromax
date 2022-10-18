import React from 'react';
import '../App.css';
import AOS      from 'aos';
import 'aos/dist/aos.css'; 


export default function Products() {

  const Logo = "images/icon/am01.png";

  React.useEffect(() => { 
    AOS.init({duration:1500});
    },[]);
  
  return (
    <>
      <div className='contact-us'>
        <div className='home-img-wrapper'>
          <p data-aos="zoom-in"className='home-message'>Página en Actualización</p>
          <img src={ Logo } alt="AgroMax" data-aos="zoom-in" className='home-img' />
        </div>
      </div>
    </>
  );
}
