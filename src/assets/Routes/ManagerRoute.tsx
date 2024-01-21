import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Manager/Home'

export default function ManagerRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
            <Home/>
        }/>
      </Routes>
    </div>
  )
}
