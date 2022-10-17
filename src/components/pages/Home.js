import React , { useEffect } from 'react';
import HeaderMain from '../HeaderMain';
import BodyHome from '../../components/containers/BodyHome';
import CorporatePhilosophy from '../../components/containers/CorporatePhilosophy';

const Home = () => {

  return (
    <>  
      <HeaderMain/>
      <BodyHome/>
      <CorporatePhilosophy/>
    </>
  );
}

export default Home;
