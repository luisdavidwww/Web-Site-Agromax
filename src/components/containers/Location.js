import React from 'react';
import '../containers/Location.css';
import Sede01 from '../../images/sede01.jpg';
import Sede02 from '../../images/Sede02.jpg';

export default function Location() {
  return (
    <>
      <div className='contact-container'>
        <div className='sede-container' >
          <div className='sede-wrap'>
            <figure className='sede-pic-wrap'>
              <img
                className='sede-img'
                alt='Sede AgroMax'
                src={ Sede01 }
              />
            </figure>   
          </div>
          <div className='sede-wrap-Info'>
            <h1 className='sede-title' 
                style={{ fontSize: '35px'}}> 
                Sede Numero Uno! 
            </h1>
            <div className='sede-text'>
                <p>
                  Aqui va la dirección y una pequeña descripción de la sede número 1
                </p>
            </div>
          </div>
        </div>

        <div className='sede-container' >
          <div className='sede-wrap'>
            <figure className='sede-pic-wrap'>
              <img
                 className='sede-img'
                alt='Sede AgroMax'
                src={ Sede02 }
              />
            </figure>   
          </div>
          <div className='sede-wrap-Info'>
            <h1 className='sede-title' 
                style={{ fontSize: '35px'}}> 
                Sede Numero Dos
            </h1>
            <div className='sede-text'>
                <p>
                    Aqui va la dirección y una pequeña descripción de la sede número 2
                </p>
            </div> 
          </div>
        </div>

      </div>
    </>
  );
}