import React from 'react'
import styles from './Sidebar.module.css'
import Trending from '../trending/Trending'

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ask}>
        <button className={'btn btn-primary '+styles.askbtn}>Ask A Question</button>
      </div>
      <div className={styles.trending}>
       <Trending title="Trending"/>
      </div>
    </div>
  )
}

export default Sidebar
