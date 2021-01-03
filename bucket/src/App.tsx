import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Home } from './components/Home';
import About from './components/About';
import { Store } from './components/Store'
import { ProductsCatagory } from './components/ProductsCategory';
import { Gents } from './components/Gents';
import { Ladies } from './components/Ladies';
import { Contact } from './components/Contact';
import { Cart } from './components/Cart';
import { ErrorPage } from './components/ErrorPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="store" element={<Store />} />
          <Route path="store/gents" element={<ProductsCatagory />}>
            <Route path="/" element={<Gents />} />
          </Route>
          <Route path="store/ladies" element={<ProductsCatagory />}>
            <Route path="/" element={<Ladies />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
