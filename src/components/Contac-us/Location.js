import React from 'react';
import AOS from 'aos';
import '../Contac-us/Location.css';
import 'aos/dist/aos.css'; 

export default function Location() {

  const Sede01 = "images/Locacion/sede01.jpg";
  const Sede02 = "images/Locacion/sede02.jpg";

  React.useEffect(() => { 
    AOS.init({duration:1500});
    },[]);

  return (
    <>
      <div className='contact-container'>

        {/*-------------------------Sede Calabozo-------------------------*/}
        <div className='sede-container' >
          <div data-aos="fade-right" className='sede-wrap'>
            <figure className='sede-pic-wrap'>
              <img
                className='sede-img'
                alt='Sede AgroMax'
                src={ Sede01 }
              />
            </figure>   
          </div>
          <div data-aos="fade-left" className='sede-wrap-Info'>
            <h1 className='sede-title'> 
                AgroMax Calabozo 
            </h1>
            <div className='sede-text'>
                <p>
                  Próximamente Calabozo Estado Guárico
                </p>
            </div>
          </div>
        </div>

        {/*-------------------------Sede Yaritagua-------------------------*/}
        <div className='sede-container' >
          <div data-aos="fade-right"  className='sede-wrap'>
            <figure className='sede-pic-wrap'>
              <img
                 className='sede-img'
                alt='Sede AgroMax'
                src={ Sede02 }
              />
            </figure>   
          </div>
          <div data-aos="fade-left" className='sede-wrap-Info'>
            <h1 className='sede-title'> 
                AgroMax Yaritagua
            </h1>
            <div className='sede-text'>
                <p>
                Próximamente Yaritagua Estado Yaracuy
                </p>
            </div> 
          </div>
        </div>

      </div>
    </>
  );
}