import React from 'react';
import '../App.css';
import './HeaderMain.css';



const HeaderMain = () => {
  return (
  <>  
    <div className='header-container'>

      <h1>Los Mejores Productos</h1>
      <p>Para la Agroindustria</p>

      <div className='header-btns'>

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

export default HeaderMain;