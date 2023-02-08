import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Main from './components/pages/Main';
import CheckIn from './components/pages/CheckIn';
import ProductDetail from './components/pages/ProductDetail';
import LogIn from './components/pages/LogIn';
import LogOut from './components/pages/LogOut';
import SignUp from './components/pages/SignUp';
import './App.css';


function App() {
  return ( 
    <div className='AppWrap'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/check-in' element={<CheckIn/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/logout' element={<LogOut/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </div>
   );
}

export default App;