import React from 'react';
import './App.css';
import About from './components/About';
import { ErrorPage } from './components/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import { Home } from './components/Home';
import { Store } from './components/Store'

function App() {
  return (
    <div>
      <Header/>
      <div className="">
        <Home/>
        <About/>
        <Store/>
        <ErrorPage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
