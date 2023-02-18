import React,{useState,useRef, useEffect} from 'react'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import styles from './Ask.module.css'
import {X} from 'phosphor-react'

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

  const desRef = useRef(null)
  const [des,setDes] = useState("")

  const setHTML = ()=>{
      setDes(desRef.current.value)
      console.log(des)
  }

  const tagfieldRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const resetUserInput = () => {
    setInputValue("");
  };

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
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

  return (
    <div className={styles.wrapper}>
       <div className={styles.navbar}>
      <NavbarDash/>
      </div>
      <SidebarDash/>
      <div className={styles.inputs}>
        <h2>Add A Title</h2>
        <input type="text" placeholder='Enter the title' className={styles.title}/>
        <h2>Add description of the question</h2>
        <textarea ref = {desRef} name="description" rows="10" className={styles.text} placeholder='Enter the question (in HTML)' onChange={setHTML}></textarea>
        <h2>Preview</h2>
        <div className={styles.preview} dangerouslySetInnerHTML={{__html:des}}></div>
      </div>
      <div className={styles.postButton}>
        <button className={"btn btn-primary "+styles.post}>Post</button>
      </div>
      <div className={styles.tagsfield}>
        <h2>Tags</h2>
        <div className={styles.tags}>
        <input type="text" ref={tagfieldRef} placeholder='Enter the tag' className={styles.text} onKeyDown={handleKeyPress} onChange={handleUserInput} value={inputValue}/>
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
