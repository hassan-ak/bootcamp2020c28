import React from 'react';
import './App.css';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Failed } from './components/failed/Failed';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import { Launch } from './components/launch/Launch';
import { Launches } from './components/launches/Launches';
import { Succeeded } from './components/succeeded/Succeeded';
import { UpComming} from './components/upComming/upComming';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Launches/>
      <Succeeded/>
      <Failed/>
      <UpComming/>
      <Launch/>
      <ErrorPage/>
      <Footer/>
    </div>
  );
}

export default App;
