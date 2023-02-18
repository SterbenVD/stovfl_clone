import React from 'react'
import styles from './Postcard.module.css'
import {ChatCenteredText} from 'phosphor-react'
import {ArrowUp, ArrowDown,Check,Trash,PencilSimple} from 'phosphor-react'
import {Link,useParams} from 'react-router-dom'

function Postcard({type,accepted,postID,title}) {

  const params = useParams();
  
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
        {type=='answer' && accepted=="true" && <>
        <Check size={45} color="#02ac16" weight="bold" style={{marginLeft: "30%",marginTop:"30%"}}/>
        </>}
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
      {title}
      </div>
      <div>
      <div className={styles.text}>
      <p>I use Eclipse, and the two most noticeable slowdowns caused by my computer are waiting for compiling and waiting for intellisense.</p>                                       
 <p>I already have a fast SSD drive and 3GB of ram.  I'm guessing that upgrading my processor would be the next best thing to do.</p>                                                                                                                                       
 <p>Would that make a significant impact?  Any recommendations for what kind of processor to get? </p>                                                                                                                                                                          
 <p>My current processor is an AMD Athlon 64 X2 Dual Core 1.91 GHz. </p> 
<<<<<<< HEAD
 <br />
=======
 <br />{
  (type=="questions" || type=="home") &&
  <>
>>>>>>> frontend
  <span className={styles.tagitem}>tag1</span>
  <span className={styles.tagitem}>tag1</span>
  <span className={styles.tagitem}>tag1</span>
  <span className={styles.tagitem}>tag1</span>
<<<<<<< HEAD
=======

  </>}

  {
    type=="comment" && <>
    <h2 className={styles.title} style={{paddingTop: "0vh",marginTop:"0", paddingBottom:"0",marginBottom:"0",minHeight:"2vh"}}>My Comment:</h2>
    <p>Good naming convention and well structured code will help you decrease the comments need. Don`t forget that each line of comments you add it's a new line to maintain!!</p>
    </>
  }
>>>>>>> frontend
  
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
      </div>{
        (type!="home" && type!="comment") &&
      <div className={styles.options}>
        <div className={styles.optionicon}>
        <Trash size={25} color="#b80000" weight="bold" style={{cursor:"pointer"}}/>
        </div>
        <div className={styles.optionicon}>
       <Link to={`/${params.userID}/questions/${postID}/edit`} className={styles.linkstyle}><PencilSimple size={25} color="#2b3b8c" weight="bold" style={{cursor:"pointer"}}/></Link> 
          </div ></div>}
    </div>

  )
}

export default Postcard
