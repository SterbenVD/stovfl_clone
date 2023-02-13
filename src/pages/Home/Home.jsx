import React,{createContext,useEffect,useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import Sidebar from '../../components/sidebar/Sidebar'
import Postcard from '../../components/postcard/Postcard'
import styles from './Home.module.css'
// import { createContext } from 'react'

import { useSearchParams } from 'react-router-dom'

const Header = createContext();

function Home() {
  const [header,setHeader] = useState("Trending Posts");
  const [login,setLogin] = useState("false")
  const [query,setQuery] = useSearchParams()
  useEffect(()=>{
    setLogin(query.get("login"))
  },[login])

  return (
    <Header.Provider value={{header,setHeader}}>
<div className={styles.wrapper}>
      <div className={styles.navbar}>
        {
          login=="false" ? <Navbar/>:<NavbarDash/>
        }
      </div>{
          login=="false" ? <Sidebar/>:<SidebarDash/>
        }
      <div className={styles.postcontainer}>
        <div>
          <h2 style={{textAlign: "center", paddingBottom:"0vh", position:"sticky"}}>{header}</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.card}>
          <Postcard/>
          </li>
          <li className={styles.card}>
          <Postcard/>
          </li>
          <li className={styles.card}>
          <Postcard/>
          </li>
          <li className={styles.card}>
          <Postcard/>
          </li>

        </ul>
      </div>
    </div>
    </Header.Provider>
    
  )
}

export {Home,Header}
