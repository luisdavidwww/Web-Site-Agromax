import React from 'react'
import '../containers/BodyHome.css';
import Sede01 from '../../images/nosotros.jpg';

function CorporatePhilosophy()  {
  return (
    <>
      <div className='corp-container'>
        <div className='corp-container' >
            <div className='corp-wrap'>
              <figure>
                <img
                  className='corp-img'
                  alt='Sede AgroMax'
                  src={ Sede01 }
                />
              </figure>   
            </div>
            <div className='corp-wrap-Info'>
              <h1 className='corp-title'> 
                  Mision
              </h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default CorporatePhilosophy;
