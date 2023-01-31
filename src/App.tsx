import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/common/Home';
import MainHooks from './components/hooks/MainHooks';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='hooks' element={<MainHooks/>}/>
      </Routes>
    </div>
  );
}

export default App;
