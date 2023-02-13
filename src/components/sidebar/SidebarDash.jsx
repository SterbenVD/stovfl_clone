import React from 'react'
import styles from './SidebarDash.module.css'
import Trending from '../trending/Trending'

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ask}>
        <button className={'btn btn-primary '+styles.askbtn}>Ask A Question</button>
      </div>
      <div>
      </div>
      <div className={styles.trending}>
      <ul className={styles.list}>
        <li className={styles.tag}><button className={styles.tagbtn} >About Me</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Questions</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Answers</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Comments</button></li>
        </ul>
      </div>
      
      <div className={styles.trending}>
       <Trending title="Trending"/>
      </div>
    </div>
  )
}

export default Sidebar
