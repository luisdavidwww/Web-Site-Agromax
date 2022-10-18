import React  from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './containers/Navbar/Navbar';
import Top_header from './containers/Top_Header/Top_header';
import Home from './pages/Home';
import Financing from './pages/Financing';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Venta from './pages/Venta';
import Consulta from './pages/Consulta';
import FooterContainer from './containers/Footer/Footer'


import './App.css';


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
      
        {/* <Route path='/' exact component={Home} />
        <Route path='/financing' component={Financing} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/venta' component={Venta} />
        <Route path='/consulta' component={Consulta} />*/ }

      </Switch>
      <FooterContainer/>
    </Router>
    </>
    
  );
}

export default App;
