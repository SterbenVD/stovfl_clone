import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Postcard from '../../components/postcard/Postcard'


function Home() {
  return (
    <div>
      <div className={styles.navbar}>
      <Navbar/>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Home
