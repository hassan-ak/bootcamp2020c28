import React from 'react';
import './App.css';
import { ErrorPage } from './components/errorPage/ErrorPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import { Launches } from './components/launches/Launches';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Launches/>
      <ErrorPage/>
      <Footer/>

    </div>
  );
}

export default App;
