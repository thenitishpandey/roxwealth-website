import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import UserPage from './UserPage'
import AdminPage from './AdminPage'
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
