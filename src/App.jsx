import React from 'react'
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={<Menu />}></Route>
      </Routes>
    </>
  );
};

export default App