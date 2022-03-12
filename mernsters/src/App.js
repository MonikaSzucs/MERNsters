import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Main from './Pages/Main.js';

export default function App() {
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}
// <App/>