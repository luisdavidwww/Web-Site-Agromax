import React from 'react';
import '../../App.css';
import Cards from '../Cards';

//import Logo from '../../images/icon/am01.png';

export default function Financing() {

  return (
    <>
      <div className='financing'>
        <div className='financing-main'>
          <h1>Financia con Nosotros</h1>
        </div>
      </div> 
      <div className='f-container'>
        <Cards />
      </div>
      
    </>
  );
}
