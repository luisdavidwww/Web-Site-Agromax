import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo';
import './Copyright.css';



const Copyright = () => {

  return (
    <>
        <div className='Container-Copy'>
            <div className='ContainerEd'>
                <div className='content'>
                    <span>Copyright 2022 - Agromax Corporation</span>
                </div>
                <Link to='/' className='Logo'>
                    <Logo />
                </Link>
            </div>            
            
        </div>
    </>
  )
}

export default Copyright;
