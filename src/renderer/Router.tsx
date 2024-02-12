import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import './App.css';
import 'tailwindcss/tailwind.css';
import HomePage from './page/HomePage';
import NotSupportedPage from './page/NotSupportedPage';
import RegisterPage from './page/RegisterPage';
import StrategiesPage from './page/StrategiesPage';
import AccountProvider from './provider/AccountProvider';

const AccountProvidedRoutes = () => {
  return (
    <AccountProvider>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.STRATEGIES} element={<StrategiesPage />} />
        <Route path={routes.ADD_STRATEGY} element={<NotSupportedPage />} />
        <Route path={routes.TRADES} element={<NotSupportedPage />} />
        <Route path={routes.ACCOUNT_SETTINGS} element={<NotSupportedPage />} />
        <Route path={routes.NOT_FOUND} element={<NotSupportedPage />} />
      </Routes>
    </AccountProvider>
  );
};

const MyRouter = () => (
  <Router>
    <Routes>
      <Route path={routes.REGISTER} element={<RegisterPage />} />
      <Route path="*" element={<AccountProvidedRoutes />} />
    </Routes>
  </Router>
);

export default MyRouter;
