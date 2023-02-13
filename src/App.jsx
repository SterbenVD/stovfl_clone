import styles from './App.module.css'
import {Home} from './pages/Home/Home.jsx'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:userID' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
