import React from 'react'
import styles from './NavbarDash.module.css'
import {MagnifyingGlass} from 'phosphor-react'
import {Link,useParams} from 'react-router-dom'

function NavbarDash() {

  const {userID} = useParams()
  return (
    
    <div>
 <div className={styles.Navbar}>
    <div className={styles.name}>
<<<<<<< HEAD
      <img src="/se-icon.png" alt="no-image" className={styles.icon}/>
=======
     <Link to='/?login=true' className={styles.linkstyle}><img src="/se-icon.png" alt="no-image" className={styles.icon}/></Link> 
>>>>>>> frontend
      <div>
      <Link to="/?login=true" className={styles.linkstyle}><span className={styles.queue}>Queue</span><span className={styles.underflow}>Underflow</span></Link>
      </div>
    </div>
    <div className={styles.searchwrapper}>
      <div className={styles.searchicon} >
      <MagnifyingGlass className={styles.magnifying} size={28} color="#812222" weight="regular" />
      </div>
    <input type="text" className={styles.search} placeholder='Search'/>
    </div>
    <div className={styles.signin}>
    <div className={styles.picwrapper}>
            <img src="/man.png" alt="" className={styles.itemimage}/>
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
