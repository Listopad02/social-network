import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import AllRoutes from './components/routes/AllRoutes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <AllRoutes />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);