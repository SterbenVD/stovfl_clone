import React,{useState,useRef, useEffect} from 'react'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import styles from './Ask.module.css'
import {X} from 'phosphor-react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import url from '../../../url'

function TagButton(props){

  const handleClick = ()=>{
    props.setTag((current)=>current.filter((tagName)=>tagName!==props.tagname))
  }

  return(
    <div className={styles.tagitem}>
        {props.tagname}
        <div className={styles.cancel}>
        <X size={15} color="#0235ac" weight="bold" onClick={handleClick}/>
        </div>
    </div>
  )
}

function Ask() {

  const inputRef = useRef(null)
  const inpRef = useRef(null)
  const titleRef = useRef(null);
  const [title,setTitle] = useState(null)
  const location = useLocation();
  const [searchRes,setSearchRes] =useState(['tag1'])
  const [height,setHeight] = useState("40vh")

  const desRef = useRef(null)
  const [des,setDes] = useState("")

  const setHTML = ()=>{
      setDes(desRef.current.value)
  }

  const tagfieldRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const resetUserInput = () => {
    setInputValue("");
    inputRef.current.style.visibilty="hidden"
  };

  const handleUserInput = async (e) => {
    setInputValue(e.target.value);
    let res = await axios.get(`${url.axios_url}/tagsearch`,{
      params:{
        tag:inputValue
      }
    })
    console.log(res)
    let tags = res.data.map((tag)=>tag.tag_name)
    setSearchRes(tags)
    inputRef.current.style.visibility="visible"
  };

  const [tag,setTag] =useState([])
  const handleKeyPress = (event)=>{
 
    if(event.key==='Enter')
      { 
        if(tagfieldRef.current.value!="" && !tag.includes(tagfieldRef.current.value))
        setTag(oldArray=> [...oldArray,tagfieldRef.current.value])
        resetUserInput()
      }
  }

  const GetTags = ({tags})=>{
    console.log(tag)
    return(<>
    {
      tags.map(tag_item=>{
      return <TagButton key={tag_item} tagname={tag_item} setTag={setTag}/>
      })
  }
    </>)
  };

  const handleClick=(event)=>{
    if(tagfieldRef.current.value!="" && !tag.includes(tagfieldRef.current.value))
    {
      setTag(oldArray=> [...oldArray,tagfieldRef.current.value])}
    resetUserInput()
  }

  const param = useParams()
  useEffect(()=>{
    console.log(location)
    if(location.pathname.includes('edit'))
      {
        axios.get(`${url.axios_url}/post/${param.postID}`).then((res)=>{
          setTitle(res.data.title)
          console.log(res)
          desRef.current.value = res.data.body
          let taglist = res.data.tags.split('>')
          let taglength = res.data.tags.split('>').length-1;
          taglist = taglist.slice(0,taglength)
          // console.log(taglength)
          setTag(taglist.map(tag=>tag.replace('<','')))
          // console.log(tag)
          setHTML();
        })
      }
  },[])

  


  return (
    <div className={styles.wrapper}>
       <div className={styles.navbar}>
      <NavbarDash/>
      </div>
      <SidebarDash/>
      <div className={styles.inputs}>
        <h2>Add A Title</h2>
        <input type="text" ref ={titleRef} placeholder='Enter the title' defaultValue={title} className={styles.title}/>
        <h2>Add description of the question</h2>
        <textarea ref = {desRef} name="description" rows="10" className={styles.text} placeholder='Enter the question (in HTML)' onChange={setHTML}></textarea>
        <h2 style={{paddingTop:"5%"}}>Preview</h2>
        <div className={styles.preview} dangerouslySetInnerHTML={{__html:des}}></div>
      </div>
      <div className={styles.postButton}>
        <button className={"btn btn-primary "+styles.post} style={{position:"fixed", width:"15%",height:"7vh",marginTop:"2%"}}>Post</button>
      </div>
      <div className={styles.tagsfield}>
        <h2>Tags</h2>
        <div className={styles.tags}>
        <input type="text" ref={tagfieldRef} placeholder='Enter the tag' className={styles.text} onKeyDown={handleKeyPress} onChange={handleUserInput} value={inputValue}/>
        <div ref={inputRef} style={{visibility:"hidden",szIndex:"10",position:"relative",top:"150%",minWidth:"77.8%",minHeight:height,overflowY:"auto",maxHeight:height,backgroundColor:"white"}} className={styles.suggest}> 
    <ul style={{listStyle:"none",paddingLeft:"0",fontSize:"16px"}}>

      {searchRes.map((item,i)=>{
        return <li key={i}><div style={{minHeight:"4vh",display:"flex",alignItems:"center",cursor:"pointer"}} className={styles.searchitem} onClick={()=>{
          inputRef.current.style.visibility="hidden"
          setSearchRes([])
          const extract = item.slice(0,1)
          tagfieldRef.current.value=item
          handleClick()
        }}>{item}</div></li>
      })}
    </ul> 
    </div>
<button className={'btn btn-primary '+styles.tagsubmit} onClick={handleClick}>Enter</button>
        </div>
        <div className={styles.displaytags}>
          {<GetTags tags={tag}/>}
        </div>
      </div>
    </div>
  )
}

export default Ask
