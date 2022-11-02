import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Top_header.css';

const Top_header = () => {
  return (
    <>
        <div className='Top_header-Container-Copy'>
            <div className='ContainerHeader'>
                <div className='content-Top'>
                    <Link to='#' className='Link-Top-Header'>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '7px', top: '20px', right: '20px',}}/>
                        <span >0251 - 8149220 </span>
                    </Link>    
                </div>
                <div className='content-Top'>
                    <Link to='#' className='Link-Top-Header'>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '7px', top: '50px', right: '20px',}}/>
                        <span>info@agromaxgroup.com</span>
                    </Link>   
                </div>
            </div>            
        </div>
    </>
  )
}

export default Top_header;
