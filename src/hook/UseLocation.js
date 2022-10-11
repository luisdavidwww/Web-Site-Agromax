import React from 'react';
import '../../App.css';
import { useLocation } from 'react-router-dom';


export default function UseLocation() {
    
  //Hook para colocar al Inicio
  let location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

}