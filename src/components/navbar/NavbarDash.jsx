import React, { useEffect, useRef,useState } from 'react'
import styles from './NavbarDash.module.css'
import {MagnifyingGlass} from 'phosphor-react'
import {Link,useParams, useSearchParams} from 'react-router-dom'
import axios from 'axios'
import url from '../../../url'
import useGetUser from '../../hooks/useGetUser'
import useSearch from '../../hooks/useSearch'

function NavbarDash({sec}) {


  const values=["result 1",
                "Result 1",
                "result 2",
                "Result 2",
                "result 3",
                "Result 3",
                "result 4",
                "Result 4",
                "result 5",
                "Result 5",
                "result 6",
                "Result 6",
                "result 7",
                "Result 7",
                "result 8",
                "Result 8",
                "result 9",
                "Result 9",
                "result 10",
              "result 11"]

  const [size,setSize] = useState('less')
  const inputRef = useRef()
  const [entry,setEntry] = useState('')
  const [searchRes,setSearchRes] = useSearch(entry)
  const [height,setHeight] = useState('40vh')
  const {userName,userProfilePic} = useGetUser();
  const inpRef = useRef()
  const [searchResult,setSearchResult] = useState([])
  const par = useParams()
  const [search,setSearch] = useSearchParams()
  const userID = search.get("uid")?search.get("uid"):par.userID

  useEffect(()=>{
    // console.log(userID)
  },[userID])
  const handleSearchChange =(e)=>{
    setEntry(e.target.value)
    if(e.target.value.length>0)
      {
        // let comp = e.target.value
        // let comp_length = e.target.value.length
        // setSearchResult(values.filter((item)=>{
        //   return item.slice(0,comp_length)==comp     
        // }))
        inputRef.current.style.visibility="visible"
        // if(searchRes.length<10)
        // {
        //   const length = searchRes.length*4;
        //   setHeight(`${length}vh`)
        // }
          
      }
    else
    {
      inputRef.current.style.visibility="hidden"
    }
  }

  useEffect(()=>{
    if(searchRes.length<10)
        {
          const length = searchRes.length*4;
          setHeight(`${length}vh`)
        }
    else{
      setHeight('40vh')
    }
  },[searchRes])

  const [section,setSection] = useState('')

  const handleSearch=(()=>{
    console.log(inpRef.current.value)
    sec(inpRef.current.value)
  })

  return (
    
    <div>
 <div className={styles.Navbar}>
    <div className={styles.name}>
      <img src="/se-icon.png" alt="no-image" className={styles.icon}/>
      <div>
      <Link to={`/?login=true&uid=${userID}`} className={styles.linkstyle}><span className={styles.queue}>Queue</span><span className={styles.underflow}>Underflow</span></Link>
      </div>
    </div>
    <div className={styles.searchwrapper}>
      <div className={styles.searchicon} >
      <MagnifyingGlass className={styles.magnifying} size={28} color="#812222" weight="regular" />
      </div>
    <input ref={inpRef} type="text" className={styles.search} placeholder='Search' onChange={handleSearchChange}/>
    <div ref={inputRef} style={{visibility:"hidden",zIndex:"10",position:"relative",top:"150%",right:"4%",minWidth:"77.8%",minHeight:height,overflowY:"auto",maxHeight:height,backgroundColor:"white"}} className={styles.suggest}> 
    <ul style={{listStyle:"none",paddingLeft:"0",fontSize:"16px"}}>

      {searchRes.map((item,i)=>{
        return <li key={i}><div style={{minHeight:"4vh",display:"flex",alignItems:"center",cursor:"pointer"}} className={styles.searchitem} onClick={()=>{
          inputRef.current.style.visibility="hidden"
          setSearchRes([])
          inpRef.current.value=item
          handleSearch()
          handleSearchChange({target:{value:item}})
        }}>{item}</div></li>
      })}
    </ul> 
    </div>
    </div>
    <div className={styles.signin}>
    <div className={styles.picwrapper}>
            <img src={userProfilePic} alt="" className={styles.itemimage}/>
            <div className={styles.dropdowncontent}>
            <ul className={styles.dropdownlist}>
              <li className={styles.dropitem}><Link className={styles.link} to={`/${userID}/settings`}><button className={"btn-primary btn "+styles.item}>Settings</button>  </Link></li>
              <li className={styles.dropitem}><button className={"btn-primary btn "+styles.item}>Logout</button></li>
            </ul>
            </div>
            
    </div>
    </div>
      </div>
    </div>

   
  )
}

export default NavbarDash
