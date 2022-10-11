import React, { useState, useEffect  } from 'react';
//import { Button } from './Button';
//import { Link } from 'react-router-dom';
import './Navbar.css';
//import Dropdown from './Dropdown';
import  AgroMax   from "../images/icon/agromax2.png";




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  //const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    showButton();
  }, []);


  
  window.addEventListener('resize',  refreshPage);


/* 

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

*/



  return (
    <>
      <nav className='navbar'>
        <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={ AgroMax } alt="" className='navbar-logo-img' />
        </a>


        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <a href='/' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </a>
          </li>

          {/* 
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Financiamiento <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          */}

          <li className='nav-item'>
            <a
              href="/financing"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Financiamiento
            </a>
          </li>
          
          <li className='nav-item'>
            <a
              href='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Productos
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contacto
            </a>
          </li>
          
        </ul>
        {/* <Button />  */}

      </nav>
    </>
  );
}

export default Navbar;
