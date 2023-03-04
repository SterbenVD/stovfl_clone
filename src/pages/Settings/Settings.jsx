import React,{useEffect, useRef,useState} from 'react'
import styles from './Settings.module.css'
import NavbarDash from '../../components/navbar/NavbarDash'
import SidebarDash from '../../components/sidebar/SidebarDash'
import DOMPurify from 'dompurify'
import useGetUser from '../../hooks/useGetUser'

function Settings() {


  const {details,userProfilePic,userName} = useGetUser();
  const [image,setImage] = useState("/man.png")

  const [imageStyle,setImageStyle] = useState(styles.pic)
  const [bodyStyle,setBodyStyle] =useState(styles.wrapper)
  const bodyRef = useRef(null)
  const iRef = useRef(null)
  const prRef = useRef(null)
  const handleImageUpload =async ()=>{
      const picture = await iRef.current.files[0];
      const url = URL.createObjectURL(picture)
      setImage(url)
  }

  const [aboutMe,setAboutMe] =useState(details.aboutMe)

 const aboutRef = useRef(null)

 useEffect(()=>{
  setAboutMe(details.aboutMe)
 },[details.aboutMe])

 const setHTML = ()=>{
  setAboutMe(aboutRef.current.value)
  // console.log(des)
}
  return (
    <div className={bodyStyle} ref={bodyRef}>
    <div className={styles.navbar}>
    <NavbarDash/>
    </div>
    <SidebarDash/>
      <div className={styles.profilepanel}>
            <div className={styles.informationPanel}>
                <h2 style={{textAlign:"center"}}>Your Details</h2>
                <div className={styles.info}>
                <div className={styles.image}>
                 <label htmlFor="filefield"><img src={userProfilePic} style={{opacity: "1"}} ref={prRef} alt="" className={imageStyle} /></label> 
                  <input type="file" className={styles.fileselect} ref={iRef} id='filefield' accept='image/*' onChange={handleImageUpload}/>
                 <div className={styles.resize}><button className={"btn btn-primary "+styles.resizebtn} onClick={()=>{if(imageStyle==styles.pic2){
                  setImageStyle(styles.pic3);
                  setBodyStyle(styles.wrapper1);
                 }
                  else{
                    setImageStyle(styles.pic2);
                    setBodyStyle(styles.wrapper2);
                  }
                  }}>Resize</button></div> 
                </div>
                <div className={styles.data}>
                  <div className={styles.listitem}>
                    <input type="text" className={styles.inputfield} defaultValue={details.display_name}/>
                    <button className={'btn btn-primary '+ styles.changebtn}>Change</button>
                  </div>
                  <div className={styles.listitem}>
                  <input type="text" className={styles.inputfield} defaultValue={details.location}/>
                  <button className={'btn btn-primary '+ styles.changebtn}>Change</button>

                  </div>
                  <div className={styles.listitem}>
                  <input type="text" className={styles.inputfield} defaultValue={details.website} spellCheck={false}/>
                  <button className={'btn btn-primary '+ styles.changebtn}>Change</button>

                  </div>
                  <div className={styles.listitem}>
                  <input type="text"className={styles.inputfield} placeholder='Enter new password to reset' />

                  </div>
                  <div className={styles.listitem}>
                  <input type="text" className={styles.inputfield}placeholder='Re-enter new password to reset' />
                  <button className={'btn btn-primary '+ styles.changebtn}>Change</button>

                  </div>
                </div>
                </div>
            </div>
            <div className={styles.aboutMePanel}>
                  <h2 style={{textAlign:"center"}}>About Me</h2>
                  <textarea ref = {aboutRef} name="description" rows="10" className={styles.text} placeholder='About Me (in HTML)' onChange={setHTML} defaultValue={aboutMe}></textarea>
        <h2>Preview</h2>
        <div className={styles.preview} dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(aboutMe)}}></div>

            </div>
            <button className={'btn btn-primary '+styles.submitbtn}>Submit</button>
      </div>
    </div>
  )
}

export default Settings
