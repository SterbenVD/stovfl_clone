import React from 'react'
import styles from './Navbar.module.css'
import {MagnifyingGlass} from 'phosphor-react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    
    <div>
 <div className={styles.Navbar}>
    <div className={styles.name}>
      <Link to='/?login=false' className={styles.linkstyle}><img src="/se-icon.png" alt="no-image" className={styles.icon}/></Link>
      <div>
      <Link to='/?login=false' className={styles.linkstyle}><span className={styles.queue}>Queue</span><span className={styles.underflow}>Underflow</span></Link>
      </div>
    </div>
    <div className={styles.searchwrapper}>
      <div className={styles.searchicon} >
      <MagnifyingGlass className={styles.magnifying} size={28} color="#812222" weight="regular" />
      </div>
    <input type="text" className={styles.search} placeholder='Search'/>
    </div>
    <div className={styles.signin}>
   <Link to='/register'><button type="button" className={"btn btn-primary "+styles.loginbtn}>SignUp</button></Link> 
   <Link to='/login'><button type="button" className={"btn btn-primary "+styles.loginbtn}>Login</button></Link> 
    </div>
      </div>
    </div>

   
  )
}

export default Navbar
