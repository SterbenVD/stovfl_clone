import styles from './App.module.css'
import Home from './pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
