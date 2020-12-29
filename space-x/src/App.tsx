import React from 'react';
import './App.css';
import { ErrorPage } from './components/errorPage/ErrorPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import { Launches } from './components/launches/Launches';
import { Succeeded } from './components/succeeded/Succeeded';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Launches/>
      <Succeeded/>
      <ErrorPage/>
      <Footer/>
    </div>
  );
}

export default App;
