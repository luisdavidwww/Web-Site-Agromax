import React from 'react';
import '../../App.css';
import Location from '../../components/containers/Location';
import { useLocation } from 'react-router-dom';

export default function ContactUs() {

  return (
    <>
      <div className='products-banner'>
        <div className='financing-main'>
          <h1>Nuestras Sedes</h1>
        </div>
      </div> 
      <Location/>
    </>
  );
}
