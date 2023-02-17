import React,{useRef,useState} from 'react'
import styles from './MyComments.module.css'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import Postcard from '../../components/postcard/Postcard'

function MyComments() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.navbar}>
    <NavbarDash/>
    </div>
    <SidebarDash/>
      
    </div>
  )
}

export default MyComments
