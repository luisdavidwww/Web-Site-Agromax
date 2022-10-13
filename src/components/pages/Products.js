import React from 'react';
import '../../App.css';
import { useLocation } from 'react-router-dom';

import Logo from '../../images/icon/am01.png';

export default function Products() {

  //Hook para colocar al Inicio
  let location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <div className='contact-us'>
        <div className='home-img-wrapper'>
          <p className='home-message'>Página en Actualización</p>
          <img src={ Logo } alt="AgroMax" className='home-img' />
        </div>
      </div>
    </>
  );
}
