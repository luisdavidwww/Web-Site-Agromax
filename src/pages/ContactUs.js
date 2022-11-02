import React from 'react';
import Location from '../components/Contac-us/Location';
import ContactSection from '../components/Contac-us/ContactSection';
import AOS      from 'aos';
import '../App.css';
import 'aos/dist/aos.css'; 

export default function ContactUs() {

  React.useEffect(() => { 
    AOS.init({duration:1800});
    },[])

  return (
    <>
      <div className='products-banner'>
        <div className='financing-main'>
          <h1 data-aos="zoom-in" >Nuestras Sedes</h1>
        </div>
      </div> 
      <Location/>
      <ContactSection/>
    </>
  );
}
