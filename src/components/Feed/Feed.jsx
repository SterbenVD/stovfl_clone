import React, { useCallback, useEffect, useRef, useState } from "react";
import Postcard from "../postcard/Postcard";
import styles from "./Feed.module.css";
import useGetPosts from "../../hooks/useGetPosts";

function Feed({ postcardtype,section }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [header,setHeader] = useState('Trending');
  const { loading, error, posts, hasMore } = useGetPosts(pageNumber,section,setPageNumber);
  
useEffect(()=>{
  // console.log(section)
  setPageNumber(1)
},[section])

  const observer = useRef();
  const lastPostElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div>
      <ul className={styles.list}>
        
        { 
          posts.map((post, index) => {
            if (index + 1 == posts.length) {
              return (
                <li
                  ref={lastPostElement}
                  key={post}
                  className={styles.card}
                >
                  <Postcard
                    type={postcardtype}
                    postID={post}
                  />
                </li>
              );
            } else {
              return (
                <li className={styles.card} key={post}>
                  <Postcard
                    type={postcardtype}
                    postID={post}
                  />
                </li>
              );
            }
          })
        }
      </ul>
    </div>
  );
}

export default Feed;
