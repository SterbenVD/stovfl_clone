import React, { useEffect } from 'react'
import styles from './SidebarDash.module.css'
import Trending from '../trending/Trending'
import { useLocation,Link,useSearchParams } from 'react-router-dom'

function SidebarDash() {

  const location = useLocation()
  const [param,setParams] = useSearchParams()
  const id = param.get("uid")
  useEffect(()=>{console.log(`/${id}`)},[])
  return (
    <div className={styles.wrapper}>
      <div className={styles.ask}>
        <Link to={`/${id}/ask`}><button className={'btn btn-primary '+styles.askbtn}>Ask A Question</button></Link>
      </div>
      <div>
      </div>
      <div className={styles.trending}>
      <ul className={styles.list}>
        <li className={styles.tag}><Link to={`/${id}`}><button className={styles.tagbtn} >About Me</button></Link> </li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Questions</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Answers</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Comments</button></li>
        </ul>
      </div>
      {
        location.pathname=="/" &&<div className={styles.trending}>
        <Trending title="Trending"/>
       </div>
      }
      
    </div>
  )
}

export default SidebarDash
