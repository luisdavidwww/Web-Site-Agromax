import React , { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Financing from './components/pages/Financing';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Venta from './components/pages/Venta';
import Consulta from './components/pages/Consulta';
//import Footer from './components/containers/FooterF'
import { FooterContainer } from './components/containers/footer'
import Top_header from "./components/containers/Top_header";


function App() {
  return (
    <>
    <Router>
      <Top_header/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/financing' component={Financing} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/venta' component={Venta} />
        <Route path='/consulta' component={Consulta} />
        {/* <Route path="*" component={NotFound} />*/ }
      </Switch>
      <FooterContainer/>
    </Router>
    </>
    
  );
}

export default App;
