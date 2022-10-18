import React from 'react'
import ProjectFinance from '../components/Finance/ProjectFinance';
import AOS      from 'aos';
import 'aos/dist/aos.css'; 
import '../App.css';


export default function Financing() {

  React.useEffect(() => { 
    AOS.init({duration:1800});
    },[])

  return (
    <>
      <div className='financing-banner'>
        <div className='financing-main'>
          <h1 data-aos="zoom-in" >Financia con Nosotros</h1>
        </div>
      </div> 
        <ProjectFinance/>
    </>
  );
}
