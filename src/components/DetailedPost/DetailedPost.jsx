import React from 'react'
import styles from './DetailedPost.module.css'
import {Link, useSearchParams } from 'react-router-dom'
import {ArrowUp,ArrowDown,Pencil} from 'phosphor-react'
import Comment from '../comment/Comment'

function DetailedPost({type}) {

    const [param,setParams] = useSearchParams()
    const login=param.get("login")

    const quesbody= `<p><a href="http://blog.stackoverflow.com/2010/04/welcome-stack-overflow-valued-associate-00005/">Stack Exchange Valued Associate #00005</a></p>                     
                                                                                                                                                                          
    <p>I was the Director of Community Development for the Stack Overflow Network for 10 years (<strong>120 million</strong> visitors per month!)</p>                        
                                                                                                                                                                             
    <p><strong>CURRENTLY LOOKING FOR A NEW ADVENTURE:</strong></p>                                                                                                           
                                                                                                                                                                             
    <p>If anyone is looking to develop their brand's online community with someone who has a heck of a track record in innovative product and feature design, let's talk!</p>
                                                                                                                                                                             
    <p>&#114;&#99;&#97;&#114;&#116;&#97;&#105;&#110;&#111;&#64;&#121;&#97;&#104;&#111;&#111;&#46;&#99;&#111;&#109;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi tortor, sed venenatis ante ornare iaculis. Morbi ac est suscipit, elementum velit vitae, luctus justo. Vestibulum venenatis dictum sem in sodales. Nam ullamcorper quam sed ipsum eleifend, id feugiat augue pulvinar. Quisque tristique nibh nisl. Duis consectetur sit amet justo ut porta. Cras erat massa, suscipit ut augue vel, lacinia tincidunt urna. Integer luctus imperdiet ex, sit amet aliquam eros scelerisque a. Donec varius purus eget est pretium, id tempus tellus elementum. Nullam eu pellentesque justo, a lobortis lacus. Maecenas non mauris sit amet justo porttitor vestibulum. Praesent sit amet aliquet enim, id congue purus. Duis nec elit nec turpis auctor interdum.
   
   Aenean eget tempor ligula, vitae tincidunt quam. Suspendisse accumsan ipsum sagittis, eleifend neque fringilla, scelerisque nunc. Phasellus nec interdum tellus. Nam posuere, nulla ut ullamcorper placerat, lacus lacus gravida quam, ac sodales nisl mauris id orci. Sed sed ornare lorem, sit amet tempus neque. Mauris condimentum blandit lacus eu sodales. Fusce feugiat mi vitae bibendum feugiat. Cras luctus at ex a volutpat. Curabitur sit amet mauris vel augue convallis congue id sed ipsum. Donec dapibus quis quam ut pretium.
   
   Proin pharetra pellentesque nibh, cursus pharetra dui ullamcorper in. Integer consectetur ipsum vitae orci porttitor bibendum. Nam feugiat tortor nibh, id accumsan magna faucibus non. Suspendisse in purus sed velit facilisis bibendum sed eu elit. Suspendisse magna quam, faucibus vel tincidunt ut, dignissim at urna. Suspendisse eros tortor, tempus ac tellus in, iaculis pulvinar massa. Nunc diam turpis, blandit nec porttitor a, ultrices eu leo.
   
   Pellentesque interdum, ante vel porttitor porta, quam libero tincidunt sem, eget interdum lacus lectus in augue. Vestibulum volutpat est nec pharetra ultrices. Suspendisse potenti. Quisque laoreet et nunc sit amet euismod. Quisque blandit ultricies diam, sit amet iaculis mauris efficitur id. Aliquam condimentum non justo at consequat. Maecenas in scelerisque tellus. Fusce et nunc elementum magna vestibulum convallis eget finibus diam. Donec velit diam, porta vitae tortor vitae, vehicula fermentum nisl.
   
   Nunc et justo vitae sapien sagittis efficitur. Morbi eget augue a neque blandit consequat. Donec facilisis mi sed felis semper euismod. Cras ultricies sit amet orci vel scelerisque. Cras viverra mi a lacus accumsan pharetra. Vestibulum sed rhoncus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa odio, gravida et mauris sit amet, dictum mattis erat. Etiam felis metus, pretium non malesuada varius, tempus nec lorem.
   
   Phasellus viverra ex ut semper finibus. Donec rutrum orci ut ex elementum, et iaculis magna cursus. Donec vestibulum lobortis semper. Nam tincidunt mauris erat, eu maximus felis tincidunt vitae. Vivamus posuere augue quis velit convallis tempor sit amet ut elit. Maecenas et vulputate lectus. Quisque ut ipsum vel libero ornare porta. Ut scelerisque quis lorem consequat pellentesque. Sed et tincidunt velit, eu fermentum felis. Donec vulputate turpis at rhoncus tempus.
   
   Fusce fringilla, lacus ut congue iaculis, ante ipsum tempor lorem, vitae sagittis elit nisl eu nunc. Morbi elementum sit amet nisl quis tempus. Duis vestibulum, urna id rutrum efficitur, felis tortor rutrum libero, ut feugiat velit ligula placerat odio. Fusce et sem in sapien mollis vestibulum. Proin eget porttitor mauris. Phasellus nec faucibus libero, non tincidunt risus. Sed nec sem dui.
   
   </p>`

  return (
    <div className={styles.postcontainer}>
            <div>
                <div>
                {type=="question" && <h2>Title</h2>}
{                type=="question"&& <div className={styles.header}><span className={styles.headertext} style={{paddingLeft:"1%"}}><span style={{color:"#919090",paddingRight:"0.7%"}}>Added</span> 3 months ago</span><span className={styles.headertext}><span style={{color:"#919090",paddingRight:"0.7%"}}>Modified</span> today</span></div>
}                <hr />
                <div className={styles.questionbody}>
                    <div className={styles.left}>
                    <div className={styles.count}>
        <ArrowUp size={35} color="#2a00fa" weight='bold' style={{marginLeft: "33.5%",cursor:"pointer"}} />
          <div className={styles.votes}>
              0
          </div>
          <ArrowDown size={35} color="#fa0000" weight='bold' style={{marginLeft: "33.5%",cursor:"pointer"}} />
          {login=="true" && <Pencil size={35} color="#b5a4a3" weight='light' style={{marginLeft: "33.5%",cursor:"pointer",marginTop:"10%"}}/>}

        </div>
                    </div>
                <div className={styles.right}>                
                    <div dangerouslySetInnerHTML={{__html:quesbody}} className={styles.quesbody}></div>
                    <div>
                        {type=="question" && <div style={{marginBottom:"2%",marginTop:"2%"}}>
                        <span className={styles.tagitem}>tag1</span>
                        <span className={styles.tagitem}>tag1</span>
                        <span className={styles.tagitem}>tag1</span>
                        <span className={styles.tagitem}>tag1</span>
                        </div>}
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.piccontainer} style={{display:"flex"}}>
                            <img src="/man.png" alt="" className={styles.pic}/>
                            
                        </div>
                        <div style={{marginLeft:"5%",fontSize:"17px", color:"#919090s",minWidth:"25%"}}>
                            {type=="question"?"Asked by":"Answered by"}: <span style={{color:"black",marginLeft:"5%"}}>Harshit Pant</span>
                        </div>
                        <div style={{marginLeft:"5%",fontSize:"17px", color:"#919090s",minWidth:"25%"}}>
                            On: <span style={{color:"black",marginLeft:"5%"}}>Harshit Pant</span>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.commentcontainer}>
                        <Comment/>
                        <Comment/>
                        <div><textarea name="Add comment" id="" cols="30" rows="2" style={{borderStyle:"none",width:"100%"}} placeholder={"Add a comment..."}></textarea></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <hr />
        </div>
  )
}

export default DetailedPost
