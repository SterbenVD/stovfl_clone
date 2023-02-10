import './App.css'
import './components/navbar/Navbar'
import './components/sidebar/Sidebar'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { Sidebar } from 'phosphor-react'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App
