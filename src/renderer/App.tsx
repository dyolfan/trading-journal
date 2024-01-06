import React from 'react';
import './App.css';
import s from './App.module.css';
import 'tailwindcss/tailwind.css';
import Providers from './provider/Providers';
import Router from './Router';

const App = () => {
  return (
    <React.StrictMode>
      <div className={s.body}>
        <Providers>
          <Router />
        </Providers>
      </div>
    </React.StrictMode>
  );
};

export default App;
