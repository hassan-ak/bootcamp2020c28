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
import { Route, Routes } from 'react-router-dom';
import { LaunchCat } from './components/LaunchCat';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="launches" element={<Launches/>} />
        <Route path="launches/succeeded" element={<LaunchCat/>}>
          <Route path="/" element={<Succeeded/>}/>
        </Route>
        <Route path="launches/failed" element={<LaunchCat/>}>
          <Route path="/" element={<Failed/>}/>
        </Route>
        <Route path="launches/up-comming" element={<LaunchCat/>}>
          <Route path="/" element={<UpComming/>}/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
