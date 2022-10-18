import React, { useState, useEffect  } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {

  const AgroMax = "images/icon/agromax2.png";


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //hook que utilizo para llevar el scroll a la parte superior en cada Router
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);


  //metodo pra que aparezca el boton de opciones superior Responsive
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  /*Luis ponle comentario a tus metodos, porque eres tan idiota que colocas metodos en ingles, y 
  como haces muchas coss note fijas bie, entoces pasan estas
   cosas... por favor presta atencion te quiero mucho Att: Luis david del Futuro. 
   RefreshPage es un metodo para refrescar la pagina, por eso se refre*/

  /*function refreshPage() {
    window.location.reload(false);
  }
  window.addEventListener('resize',  refreshPage);*/


  //activación de metodos
  useEffect(() => {
    showButton();
  }, []);


  return (
    <>
      <nav className='navbar'>
        <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={ AgroMax } alt="AgroMax"  style={{height:'66px', width:'170px'}} />
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
