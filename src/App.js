import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, About, Transaction, CreateNFT, Transactions } from "./components/components"

function App() {

  return (
      <div className='gradient-bg-welcome'>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Transactions />} />
              <Route  path="/about" element={<About />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/create-NFT" element={<CreateNFT />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
