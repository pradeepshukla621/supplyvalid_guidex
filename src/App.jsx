import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login/Login.jsx'
import LoginTwo from './components/LoginTwo/LoginTwo.jsx'
import LoginThree from './components/LoginThree/LoginThree.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
     {/* <Dashboard /> */}
    {/* <Login /> */}
    {/* <LoginTwo /> */}
    {/* <LoginThree /> */}
    {/* <Text /> */}

    <Router>
            <Routes>
                <Route path="/" element={<LoginTwo /> } />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
