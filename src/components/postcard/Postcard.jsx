import React from 'react'
import styles from './Postcard.module.css'
import {ChatCenteredText} from 'phosphor-react'
import {ArrowUp, ArrowDown} from 'phosphor-react'
function Postcard() {
  return (
    <div className={styles.container}>
      <div className={styles.votecount}>
        <div className={styles.count}>
        <ArrowUp size={45} color="#2a00fa" weight='bold' style={{marginLeft: "30%"}} />
          <div className={styles.votes}>
              0
          </div>
          <ArrowDown size={45} color="#fa0000" weight='bold' style={{marginLeft: "30%"}} />
        </div>
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
      What parts of my computer should I upgrade first to speed up development?
      </div>
      <div>
      <div className={styles.text}>
      <p>I use Eclipse, and the two most noticeable slowdowns caused by my computer are waiting for compiling and waiting for intellisense.</p>                                       
 <p>I already have a fast SSD drive and 3GB of ram.  I'm guessing that upgrading my processor would be the next best thing to do.</p>                                                                                                                                       
 <p>Would that make a significant impact?  Any recommendations for what kind of processor to get? </p>                                                                                                                                                                          
 <p>My current processor is an AMD Athlon 64 X2 Dual Core 1.91 GHz. </p> 
 <br />
  <span className={styles.tagitem}>tag1</span>
  <span className={styles.tagitem}>tag1</span>
  <span className={styles.tagitem}>tag1</span>
  <span className={styles.tagitem}>tag1</span>
  
  <hr className={styles.footerline}/>
                                                                                                                                                                                                                                                 
      </div>
      </div>
      
      <div className={styles.footer}>
        <div className={styles.profilepicture}>
          <div className={styles.picture}>
            <div className={styles.dp}>
            <img src="/man.png" alt="" className={styles.itemimage} />
            </div>
          </div>
          <div className={styles.name}>
            Posted By: Harshit Pant
          </div>
        </div>
        <div className={styles.time}>
          12hr ago
        </div>
        <div className={styles.responses}>
          <ChatCenteredText size={32} color="#812222" />
       <div>50+</div> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default Postcard
