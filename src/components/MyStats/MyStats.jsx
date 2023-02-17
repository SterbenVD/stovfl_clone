import React from 'react'
import styles from './MyStats.module.css'
import { Student,ArrowUp,ArrowDown,Question,PencilSimpleLine,ChatsCircle } from 'phosphor-react'

function MyStats() {
  return (
    <div className={styles.wrapper}>
        <h2>My Statistics</h2>
        <ul className={styles.statslist}>
            <li className={styles.listitem}>

            <Student size={24} color="#0235ac" weight="bold" /> <span>My reputation:</span> 
            </li>
            <li className={styles.listitem}>
            <ArrowUp size={24} color="#0235ac" weight="bold" /> <span>Number of Upvotes:</span>
            </li>
            <li className={styles.listitem}>
            <ArrowDown size={24} color="#0235ac" weight="bold" /> <span>Number of Downvotes:</span>
            </li>
            <li className={styles.listitem}><Question size={24} color="#0235ac" weight="bold" /> <span>Number of Questions Asked:</span></li>
            <li className={styles.listitem}><PencilSimpleLine size={24} color="#0235ac" weight="bold" /> <span>Number of Answers Given:</span></li>
            <li className={styles.listitem}><ChatsCircle size={24} color="#0235ac" weight="bold" /> <span>Number of Comments:</span></li>
        </ul>
    </div>
  )
}

export default MyStats
