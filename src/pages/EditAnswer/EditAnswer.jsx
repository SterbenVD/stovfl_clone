import React from 'react'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import styles from './EditAnswer.module.css'

function EditAnswer() {
  return (
    <div className={styles.wrapper}>
       <div className={styles.navbar}>
      <NavbarDash/>
      </div>
      <SidebarDash/>
      
    </div>
  )
}

export default EditAnswer
