import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home/Home";
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'

 

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        
        
      </Routes>
    </div>
    </>
  )
}

export default App;

