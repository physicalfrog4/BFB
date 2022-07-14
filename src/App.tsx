import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages'
import Home2 from './pages/skillRequest'
import "./App.css";

function App() {
  return (
    <Router>
    
      <Routes> 
       // <Route path="/" element={<Home />}  />;
       // <Route path='/skillRequest' element={<Home2 />} />;
      
      </Routes>

    </Router>
  );
}

export default App;
