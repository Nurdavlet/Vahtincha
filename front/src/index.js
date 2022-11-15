import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Notes from './Notes/Notes';
import PrivacyPolicy from './PolicyPrivacy/policy';
import Help from './Help/Help';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path='/policy' element={<PrivacyPolicy/>} />
        <Route path='/help' element={<Help/>} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
