import React from 'react'
import styles from './Trending.module.css'

function Trending() {
  return (
    <div>
       <h3>Trending</h3>
        <ul className={styles.list}>
        <li className={styles.tag}><button className={styles.tagbtn}>Tag1</button></li>
        <li className={styles.tag}><button className={styles.tagbtn}>Tag1</button></li>
        <li className={styles.tag}><button className={styles.tagbtn}>Tag1</button></li>
        <li className={styles.tag}><button className={styles.tagbtn}>Tag1</button></li>
        <li className={styles.tag}><button className={styles.tagbtn}>Tag1</button></li>
        <li className={styles.tag}><button className={styles.tagbtn}>Tag1</button></li>

        
        </ul>
    </div>
  )
}

export default Trending
