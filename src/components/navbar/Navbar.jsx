import React from 'react'
import styles from './Navbar.module.css'
import {MagnifyingGlass} from 'phosphor-react'


function Navbar() {
  return (
    
    <div>
 <div className={styles.Navbar}>
    <div className={styles.name}>
      <img src="icon.png" alt="no-image" />
Text 1
    </div>
    <div className={styles.searchwrapper}>
      <div className={styles.searchicon} >
      <MagnifyingGlass size={24} color="#812222" weight="regular" />
      </div>
    <input type="text" className={styles.search} placeholder='Search'/>
    </div>
    <div className={styles.signin}>
        Text3
    </div>
    
      </div>
      <div className={styles.text}>

      </div>
    </div>

   
  )
}

export default Navbar
