import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'

export const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>} />
    </Routes>
  )
}
