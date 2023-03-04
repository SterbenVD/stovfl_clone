import React,{useEffect, useState} from 'react'
import styles from './AboutMe.module.css'
import useGetUser from '../../hooks/useGetUser'
import url from '../../../url'
import DOMPurify from 'dompurify'

function AboutMe() {

const [aboutMe,setAboutMe] = useState('');
const {details} = useGetUser()
useEffect(()=>{
setAboutMe(details.aboutMe)
},[details])

  return (
    <div className={styles.wrapper}>
      <h1 style={{marginBottom: "5vh"}}>About Me</h1>
      <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(aboutMe)}}></div>

 <h2 style={{marginTop:"5vh",marginBottom:"2vh"}}>My Website</h2>
 <a href=" https://thomasjowens.com/
" className={styles.website}> https://thomasjowens.com/
</a>
      
    </div>
  )
}

export default AboutMe
