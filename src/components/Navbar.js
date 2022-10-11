import React, { useState, useEffect  } from 'react';
//import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
//import Dropdown from './Dropdown';
import  AgroMax   from "../images/icon/agromax2.png";




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
            <NavLink
              exact to="/"
              className= 'nav-links'
              activeClassName='nav-links_active'
              onClick={closeMobileMenu}
            >
              Inicio
            </NavLink>
          </li>
          
          <li className='nav-item'>
            <NavLink
              to="/financing"
              className= 'nav-links'
              activeClassName='nav-links_active'
              onClick={closeMobileMenu}
            >
              Financiamiento
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/products'
              className= 'nav-links'
              activeClassName='nav-links_active'
              onClick={closeMobileMenu}
            >
              Productos
            </NavLink>
          </li>
          <li className='nav-item'>
          <NavLink
              to="/contact-us"
              className= 'nav-links'
              activeClassName='nav-links_active'
              onClick={closeMobileMenu}
            >
            Contacto
          </NavLink>   
          </li>
          
        </ul>
        {/* <Button />  */}

      </nav>
    </>
  );
}

export default Navbar;
