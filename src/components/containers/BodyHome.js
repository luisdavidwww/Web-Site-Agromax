import React from 'react'
import '../containers/BodyHome.css';
import Sede01 from '../../images/nosotros.jpg';

function BodyHome()  {
  return (
    <>
      <div className='body-container'>

        <div className='us-container' >
            <div className='us-wrap'>
              <figure>
                <img
                  className='us-img'
                  alt='Sede AgroMax'
                  src={ Sede01 }
                />
              </figure>   
            </div>
            <div className='us-wrap-Info'>
              <h1 className='us-title'> 
                  Nosotros
              </h1>
              <div className='us-text'>
                  <p>
                    Somos una compañía que ventde muchos productos y producticos de alta calidad para el productor venezolano y 
                    para todo el que quiera mi bro. A veces bien a veces mal, pa lante a paso de vencedores!. Camarada.
                  </p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BodyHome;
