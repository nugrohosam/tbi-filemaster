import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainAuth from './pages/Auth/MainAuth/MainAuth';
import MainPanel from './pages/Panel/MainPanel/MainPanel'


function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainAuth/>} />
      <Route path="/auth/*" element={<MainAuth/>} />
      <Route path="/panel/*" element={<MainPanel/>} />
    </Routes>
  </Router>
  )
}

export default App
