import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createPortal } from "react-dom"
import Input from "./components/Input";
import Words from './components/Words';
// import { Portal } from 'react-portal';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Input />}>
        <Route path='/' element={<Words />}></Route>
      </Route>
    </Routes>
  )
};

export default App;
