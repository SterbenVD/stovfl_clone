import React,{useContext} from 'react'
import styles from './Trending.module.css'
import {Header} from '../../pages/Home/Home'

function Trending(props) {
  const {header,setHeader} = useContext(Header)
  const handleClick =(e)=>{
    props.func(e)
  }
  return (
    <div>
       <h3>{props.title}</h3>
        <ul className={styles.list}>
        <li className={styles.tag}><button className={styles.tagbtn} onClick={()=> {console.log("clicked") ;setHeader("Tag1"); handleClick('Tag1')}}>Tag1</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} onClick={()=> {console.log("clicked") ;setHeader("Tag2"); handleClick('Tag2')}}>Tag2</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} onClick={()=> {console.log("clicked") ;setHeader("Tag3"); handleClick('Tag3')}}>Tag3</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} onClick={()=> {console.log("clicked") ;setHeader("Tag4"); handleClick('Tag4')}}>Tag4</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} onClick={()=> {console.log("clicked") ;setHeader("Tag5"); handleClick('Tag5')}}>Tag5</button></li>
        <li className={styles.tag}><button className={styles.tagbtn} onClick={()=> {console.log("clicked") ;setHeader("Trending Posts")}}>Surprise Me</button></li>
        </ul>
    </div>
  )
}

export default Trending
