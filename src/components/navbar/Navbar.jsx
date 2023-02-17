import React from 'react'
import styles from './Navbar.module.css'
import {MagnifyingGlass} from 'phosphor-react'


function Navbar() {
  return (
    
    <div>
 <div className={styles.Navbar}>
    <div className={styles.name}>
      <img src="/se-icon.png" alt="no-image" className={styles.icon}/>
      <div>
      <span className={styles.queue}>Queue</span><span className={styles.underflow}>Underflow</span>
      </div>
    </div>
    <div className={styles.searchwrapper}>
      <div className={styles.searchicon} >
      <MagnifyingGlass className={styles.magnifying} size={28} color="#812222" weight="regular" />
      </div>
    <input type="text" className={styles.search} placeholder='Search'/>
    </div>
    <div className={styles.signin}>
    <button type="button" className={"btn btn-primary "+styles.loginbtn}>SignUp</button>
    <button type="button" className={"btn btn-primary "+styles.loginbtn}>Login</button>
    </div>
      </div>
    </div>

   
  )
}

export default Navbar
