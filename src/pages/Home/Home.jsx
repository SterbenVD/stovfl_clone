import React,{createContext,useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Postcard from '../../components/postcard/Postcard'
import styles from './Home.module.css'
// import { createContext } from 'react'

const Header = createContext();

function Home() {
  const [header,setHeader] = useState("Trending Posts");
  return (
    <Header.Provider value={{header,setHeader}}>
<div className={styles.wrapper}>
      <div className={styles.navbar}>
      <Navbar/>
      </div>
      <Sidebar/>
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
