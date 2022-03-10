import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home/Home';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Routes />
      <Home />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);