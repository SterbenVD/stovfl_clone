<<<<<<< Updated upstream
import styles from './App.module.css'
import {Home} from './pages/Home/Home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

=======
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
>>>>>>> Stashed changes
function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
=======
    <div>
      <Register />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
