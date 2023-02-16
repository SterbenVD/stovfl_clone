import React, { useEffect } from 'react'
import React, { useEffect } from 'react'
import styles from './SidebarDash.module.css'
import Trending from '../trending/Trending'
<<<<<<< HEAD
import { useLocation,Link,useSearchParams } from 'react-router-dom'
=======
import { useLocation,Link,useSearchParams,useParams } from 'react-router-dom'
>>>>>>> frontend

function SidebarDash() {

  const location = useLocation()
  const [param,setParams] = useSearchParams()
<<<<<<< HEAD
  const id = param.get("uid")
  useEffect(()=>{console.log(`/${id}`)},[])
=======
  const user = useParams()
  const id = location.pathname=="/"?param.get("uid"):user.userID
  // useEffect(()=>{console.log(id)},[])
>>>>>>> frontend
  return (
    <div className={styles.wrapper}>
      <div className={styles.ask}>
        <Link to={`/${id}/ask`}><button className={'btn btn-primary '+styles.askbtn}>Ask A Question</button></Link>
        <Link to={`/${id}/ask`}><button className={'btn btn-primary '+styles.askbtn}>Ask A Question</button></Link>
      </div>
      <div>
      </div>
      <div className={styles.trending}>
      <ul className={styles.list}>
        <li className={styles.tag}><Link to={`/${id}`}><button className={styles.tagbtn} >About Me</button></Link> </li>
<<<<<<< HEAD
        <li className={styles.tag}><button className={styles.tagbtn} >My Questions</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Answers</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} >My Comments</button></li>
=======
        <li className={styles.tag}><Link to={`/${id}/questions`}><button className={styles.tagbtn} >My Questions</button></Link> </li>
        <li className={styles.tag}><Link to={`/${id}/answers`}><button className={styles.tagbtn} >My Answers</button></Link></li>
        <li className={styles.tag}><Link to={`/${id}/comments`}><button className={styles.tagbtn} >My Comments</button></Link></li>
>>>>>>> frontend
        </ul>
      </div>
      {
        location.pathname=="/" &&<div className={styles.trending}>
        <Trending title="Trending"/>
       </div>
      }
      
      {
        location.pathname=="/" &&<div className={styles.trending}>
        <Trending title="Trending"/>
       </div>
      }
      
    </div>
  )
}

export default SidebarDash
