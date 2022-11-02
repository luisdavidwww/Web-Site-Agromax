import React from 'react';
import AOS      from 'aos';
import 'App.css';
import 'aos/dist/aos.css'; 
import 'components/Home/HeaderHome.css';



const HeaderHome = () => {

  React.useEffect(() => { 
    AOS.init({duration:1800});
    },[])


  return (
  <>  
    <div className='header-container'>
      
      <h1 data-aos="zoom-in"  >Los Mejores Productos</h1>
      <p data-aos="zoom-in">Para la Agroindustria</p>

      <div data-aos="zoom-in"  className='header-btns'>

        <a href='/products' className='btn-link'>
          <button className='btn-outline'
              >Ver Productos
          </button>
        </a>

        <a href='/financing' className='btn-link'>
          <button className='btn-main'
              >Financiamiento
          </button>
        </a>

      </div>
    </div>  
  </>
  );
}

export default HeaderHome;