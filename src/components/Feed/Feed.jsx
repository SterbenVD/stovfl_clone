import React, { useCallback, useRef,useState } from 'react'
import Postcard from '../postcard/Postcard'
import styles from './Feed.module.css'
import useGetPosts from '../../hooks/useGetPosts'

function Feed({postcardtype}) {

  const [pageNumber,setPageNumber] = useState(1)
  const {
    loading,
    error,
    posts,
    hasMore
  } = useGetPosts(pageNumber);

  const observer = useRef()
  const lastPostElement = useCallback(node=>{

    console.log(observer.current==true)
    console.log(node)
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting)
      {
        setPageNumber(prevPageNumber=>prevPageNumber+1)
      }
      
    })
    if(node) observer.current.observe(node)
  },[loading,hasMore])
  return (
    <div>
      <ul className={styles.list}>
          {/* <li className={styles.card}>
          <Postcard type={postcardtype} accepted={"true"} postID={"1"}/>
          </li>
          <li className={styles.card}>
          <Postcard type={postcardtype} postID={"1"}/>
          </li>
          <li className={styles.card}>
          <Postcard type={postcardtype} postID={"1"}/>
          </li>
          <li className={styles.card}>
          <Postcard type={postcardtype} postID={"1"}/>
          </li> */}
          {
              posts.map((post,index)=>{
                if(index+1==posts.length)
                {
                  return <li ref ={lastPostElement} key={post.title} className={styles.card}>
                <Postcard type={postcardtype} title={post.title} postID={"1"}/>
                </li>
                }
                else{
                  return <li className={styles.card} key={post.title}>
                <Postcard type={postcardtype}   title={post.title} postID={"1"}/>
                </li>
                }
              })
          }

        </ul>
    </div>
  )
}

export default Feed
