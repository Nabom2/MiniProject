import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Main from './components/pages/Main';
import CheckIn from './components/pages/CheckIn';
import ProductDetail from './components/pages/ProductDetail';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import './App.css';
import Footer from './components/layout/Footer';
import SeekingPass from './components/pages/SeekingPass';
import { useRecoilValue } from 'recoil';
import { logInState } from './state/logInState';

function App() {

  return ( 
      <div className='AppWrap'>
        <BrowserRouter>
            <Header/>
                <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/check-in' element={<CheckIn/>}/>
                  <Route path='/product-detail/:id' element={<ProductDetail/>}/>
                  <Route path='/login' element={<LogIn/>}/>
                  <Route path='/seeking-password' element={<SeekingPass/>}/>
                  <Route path='/sign-up' element={<SignUp/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
      </div>
   );
}

export default App;