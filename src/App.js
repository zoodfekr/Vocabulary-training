import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createPortal } from "react-dom"
import Home from "./components/Homepage";
// import { Portal } from 'react-portal';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  )
};

export default App;
