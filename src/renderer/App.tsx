import React from 'react';
import './App.css';
import s from './App.module.css';
import 'tailwindcss/tailwind.css';
import BaseProviders from './provider/BaseProviders';
import Router from './Router';

const App = () => {
  return (
    <React.StrictMode>
      <div className={s.body}>
        <BaseProviders>
          <Router />
        </BaseProviders>
      </div>
    </React.StrictMode>
  );
};

export default App;
