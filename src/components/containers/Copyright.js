import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Copyright.css';
import Logo from '../../assets/Logo';


export default  function Copyright() {

    const [click, setClick] = useState(false);
    //const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


  return (
    <>
        <div className='Container-Copy'>
            <div className='ContainerEd'>
                <div className='content'>
                    <span>Copyright 2022 - Agromax Corporation</span>
                </div>
                <Link to='/' className='Logo' onClick={closeMobileMenu}>
                    <Logo />
                </Link>
            </div>            
            
        </div>
    </>
  )
}
