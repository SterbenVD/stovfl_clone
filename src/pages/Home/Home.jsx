import React,{createContext,useEffect,useState,useRef, useCallback} from 'react'
import Navbar from '../../components/navbar/Navbar'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import Sidebar from '../../components/sidebar/Sidebar'
import Postcard from '../../components/postcard/Postcard'
import styles from './Home.module.css'
import Feed from '../../components/Feed/Feed'


import { useSearchParams } from 'react-router-dom'

const Header = createContext();

function Home() {
  const [header,setHeader] = useState("Trending Posts");
  const [login,setLogin] = useState("false")
  const [query,setQuery] = useSearchParams()
  const [section,setSection] = useState('Trending Posts')
  useEffect(()=>{
    setLogin(query.get("login"))
  },[login])

return (
    <Header.Provider value={{header,setHeader}}>
<div className={styles.wrapper}>
      <div className={styles.navbar}>
        {
          login=="false" ? <Navbar sec={setSection}/>:<NavbarDash sec={setSection} />
        }
      </div>{
          login=="false" ? <Sidebar sec={setSection}/>:<SidebarDash sec={setSection}/>
        }
      <div className={styles.postcontainer}>
        <div>
          <h2 style={{textAlign: "center", paddingBottom:"0vh", position:"sticky"}}>{header}</h2>
        </div>
       <Feed postcardtype={"home"} section={section}/>
      </div>
    </div>
    </Header.Provider>
    
  )
}

export {Home,Header}
