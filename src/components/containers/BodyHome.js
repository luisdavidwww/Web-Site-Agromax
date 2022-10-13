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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum.
                  </p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BodyHome;
