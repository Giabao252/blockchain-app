import React from 'react';
import { Routes, Route } from "react-router-dom";
import { TopNav, Home, Footer, About, Transaction } from "./components/components"

import useStyles from './styles';

function App() {

  return (
      <div className='gradient-bg-welcome'>
        <Home />

      </div>
 
  );
}

export default App;
