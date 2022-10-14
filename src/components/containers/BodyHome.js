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

export default BodyHome;
