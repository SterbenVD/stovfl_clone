import React from 'react'
import styles from './Comment.module.css'

function Comment() {
  return (
    <div className={styles.container} style={{backgroundColor:"#f7f3f2",paddingTop:"1%",paddingBottom:"1%"}}>
      <div className={styles.left}>
        0
      </div>
      <div className={styles.right}>
        <span style={{marginRight:"5%"}}>Comment body</span><span style={{color:"blue",cursor:"pointer",marginRight:"2%"}}>-UserName</span> <span style={{color:"#9e9a99"}}>date</span>
      </div>
      <hr />
    </div>
  )
}

export default Comment
