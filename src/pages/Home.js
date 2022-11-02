import React , { useEffect, useState } from 'react';
import HeaderHome from '../components/Home/HeaderHome';
import AboutUsHome from '../components/Home/AboutUsHome';
import CorporatePhilosophy from '../components/Home/CorporatePhilosophy';
import Loader from '../components/Loader/Loader';

const Home = () => {

  const [loanding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  return (
    <>
      { loanding && <Loader/> }
      <HeaderHome/>
      <AboutUsHome/>
      <CorporatePhilosophy/>
    </>
  );
}

export default Home;
