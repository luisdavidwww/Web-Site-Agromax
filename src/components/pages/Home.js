import React from 'react';
import HeaderMain from '../HeaderMain';
import BodyHome from '../../components/containers/BodyHome';
import { useLocation } from 'react-router-dom';

export default function Home() {

  //Hook para colocar al Inicio
  let location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);


  return (
    <>  
      <HeaderMain/>
      <BodyHome/>
    </>
  );
}
