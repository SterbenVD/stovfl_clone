import React from 'react'
import NavbarDash from '../../components/navbar/NavbarDash'
import styles from '../../components/navbar/NavbarDash.module.css'

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
      <NavbarDash/>
      </div>
    </div>
  )
}

export default Dashboard
