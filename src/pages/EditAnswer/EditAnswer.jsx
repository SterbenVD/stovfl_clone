import React,{useEffect,useState,useRef} from 'react'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import styles from './EditAnswer.module.css'
import DetailedPost from '../../components/DetailedPost/DetailedPost'
import { useParams,useSearchParams } from 'react-router-dom'
import useGetPostDetails from '../../hooks/useGetPostDetails'
import axios from 'axios'

function EditAnswer() {

  const [params,setParams] = useSearchParams()
    const desRef = useRef(null)
  const [des,setDes] = useState("")
  const setHTML = ()=>{
      setDes(desRef.current.value)
      // console.log(des)
  }

  const urlParam = useParams()

  const postID = urlParam.postID


  const state = useGetPostDetails({postID:postID,type:"answer"})
  useEffect(()=>{
    console.log(postID)
    console.log(state)
    desRef.current.value = state.body
    setHTML()
  },[state])


  const handleClick = ()=>{

  }
  return (
    <div className={styles.wrapper}>
       <div className={styles.navbar}>
      <NavbarDash/>
      </div>
      <SidebarDash/>
      <div className={styles.postcontainer}>
            <DetailedPost type={"question"}/>
            <div style={{width:"100%"}}>
                <h4>Your Answer</h4>
                <div className={styles.inputs}>
        <textarea ref = {desRef} spellCheck="false" name="description" rows="10" className={styles.text} placeholder='Enter your answer' onChange={setHTML} style={{width:"100%",fontSize:"18px"}}></textarea>
        <h4 style={{paddingTop:"5%"}}>Preview</h4>
        <div className={styles.preview} dangerouslySetInnerHTML={{__html:des}}></div>
        <button className={'btn btn-primary'} style={{width:"10%",marginBottom:"5%",paddingTop:"1%",paddingBottom:"1%",fontSize:"18px"}} onClick={handleClick}>Edit</button>
      </div>
            </div>
        </div>

      </div>
  )
}

export default EditAnswer
