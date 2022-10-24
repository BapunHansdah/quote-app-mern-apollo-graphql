import React from 'react'
import Main from './components/main'
import Register from './components/register'
import Login from './components/login'
import Profile from './components/profile'
import CreateQuote from './components/createquote'
import Otheruser from './components/otheruser'
import Header from './components/header'
import Design from './components/design'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

function App() {


  return (

    <>
      <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/createquote' element={<CreateQuote />} />
            <Route path='/otheruser/:id' element={<Otheruser/>} />
            <Route path='/design' element={<Design />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

