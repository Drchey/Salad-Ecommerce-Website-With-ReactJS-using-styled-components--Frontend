import React from 'react';
import Hero from './components/Hero';
import {GlobalStyle} from './GlobalStyle';
import { BrowserRouter as Router} from 'react-router-dom';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

const App =()=>{
  return(
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Choose Your Favourite' data={productData}/>
        <Feature />
        <Products heading='Other Varities You can choose from' data={productDataTwo}/>
        <Footer />
      </Router> 
      
  )
}

export default App;
