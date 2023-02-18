import React,{useRef,useState} from 'react'
import styles from './MyComments.module.css'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
<<<<<<< HEAD
import Postcard from '../../components/postcard/Postcard'
=======
import Feed from '../../components/Feed/Feed'
>>>>>>> frontend

function MyComments() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.navbar}>
    <NavbarDash/>
    </div>
    <SidebarDash/>
<<<<<<< HEAD
      
=======
    <div className={styles.postcontainer}>
        <div>
          <h2 style={{textAlign: "center", paddingBottom:"0vh", position:"sticky"}}>My Questions</h2>
        </div>
        <Feed postcardtype={"comment"}/>
      </div>
>>>>>>> frontend
    </div>
  )
}

export default MyComments
