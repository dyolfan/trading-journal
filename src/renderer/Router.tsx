import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import './App.css';
import 'tailwindcss/tailwind.css';
import HomePage from './page/HomePage';
import NotSupportedPage from './page/NotSupportedPage';

const MyRouter = () => (
  <Router>
    <Routes>
      <Route path={routes.HOME} element={<HomePage />} />
      <Route path={routes.REGISTER} element={<NotSupportedPage />} />
      <Route path={routes.STRATEGIES} element={<NotSupportedPage />} />
      <Route path={routes.ADD_STRATEGY} element={<NotSupportedPage />} />
      <Route path={routes.TRADES} element={<NotSupportedPage />} />
      <Route path={routes.ACCOUNT_SETTINGS} element={<NotSupportedPage />} />
      <Route path={routes.NOT_FOUND} element={<NotSupportedPage />} />
    </Routes>
  </Router>
);

export default MyRouter;
