import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Pages/App';
import Request from './Pages/Request';
import LogInPage from './Pages/LogInPage';
import CreateAcounts from './Pages/CreateAcounts';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/Request' element={<Request></Request>} />
        <Route path='/Loggin' element={<LogInPage></LogInPage>} />
        <Route path='/SignIn' element={<CreateAcounts></CreateAcounts>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);