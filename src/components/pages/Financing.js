import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { useLocation } from 'react-router-dom';


export default function Financing() {

  return (
    <>
      <div className='financing-banner'>
        <div className='financing-main'>
          <h1>Financia con Nosotros</h1>
        </div>
      </div> 
        <Cards />
    </>
  );
}
