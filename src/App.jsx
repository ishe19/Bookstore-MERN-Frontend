import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
  <>
  <NavBar/>
  <main className='min-h-screen max-w-screen-2xl mx-auto px-4 font-primary'>
  <Outlet/>
  </main>
  <Footer/>
    </>
  )
}

export default App
