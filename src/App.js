import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNav, Home, Footer, About, Transaction } from "./components/components"

import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <div className='platform-wrapper'>
      <div className='gradient-bg-welcome'>
        
        <About />
      </div>
    </div>
  );
}

export default App;
