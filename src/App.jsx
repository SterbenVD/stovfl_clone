import styles from './App.module.css'
import {Home} from './pages/Home/Home.jsx'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Ask from './pages/Ask/Ask'
import Settings from './pages/Settings/Settings'
import MyAnswers from './pages/MyAnswers/MyAnswers'
import MyQuestions from './pages/MyQuestions/MyQuestions'
import MyComments from './pages/MyComments/MyComments'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:userID' element={<Dashboard/>}></Route>
        <Route path='/:userID/ask' element={<Ask/>}></Route>
        <Route path='/:userID/settings' element={<Settings/>}></Route>
        <Route path='/:userID/comments' element={<MyComments/>}></Route>
        <Route path='/:userID/answers' element={<MyAnswers/>}></Route>
        <Route path='/:userID/questions' element={<MyQuestions/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
