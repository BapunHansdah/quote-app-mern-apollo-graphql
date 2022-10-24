import React from 'react'
import Profile from './components/profile'
import Login from './components/login'
import Register from './components/register'
import Header from './components/header'
import Feed from './components/feed'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {

    return (
        <>
        <BrowserRouter>
         <Header/>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/' element={<Feed/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App