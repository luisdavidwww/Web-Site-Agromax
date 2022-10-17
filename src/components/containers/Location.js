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
            <h1 className='sede-title'> 
                AgroMax Calabozo 
            </h1>
            <div className='sede-text'>
                <p>
                  Calabozo Estado Guárico
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
            <h1 className='sede-title'> 
                AgroMax Yaritagua
            </h1>
            <div className='sede-text'>
                <p>
                    Yaritagua Estado Yaracuy
                </p>
            </div> 
          </div>
        </div>

      </div>
    </>
  );
}