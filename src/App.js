import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TopNav, Home, Footer, About, Transaction } from "./components/components"

function App() {

  return (
      <div className='gradient-bg-welcome'>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route  path="/about" element={<About />} />
              <Route path="/transaction" element={<Transaction />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
