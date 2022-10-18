import React , { useEffect } from 'react';
import HeaderHome from '../components/Home/HeaderHome';
import AboutUsHome from '../components/Home/AboutUsHome';
import CorporatePhilosophy from '../components/Home/CorporatePhilosophy';

const Home = () => {

  return (
    <>  
      <HeaderHome/>
      <AboutUsHome/>
      <CorporatePhilosophy/>
    </>
  );
}

export default Home;
