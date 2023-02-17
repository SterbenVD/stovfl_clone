import React,{useRef,useState} from 'react'
import styles from './MyQuestions.module.css'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import Postcard from '../../components/postcard/Postcard'

function MyQuestions() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.navbar}>
    <NavbarDash/>
    </div>
    <SidebarDash/>
    <div className={styles.postcontainer}>
        <div>
          <h2 style={{textAlign: "center", paddingBottom:"0vh", position:"sticky"}}>My Questions</h2>
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
  )
}

export default MyQuestions
