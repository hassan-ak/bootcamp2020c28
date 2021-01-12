import React, { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import './App.css'

const Auth = lazy(() => import('../features/auth/Auth'));
const Home = lazy(() => import('../features/home/Home'));

const App: FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <Routes>
        <Route path="/">
          <Suspense fallback={<p>Loading...</p>}>
            {isLoggedIn ? <Home /> : <Auth />}
          </Suspense>
        </Route>
    </Routes>
  );
};

export default App;
