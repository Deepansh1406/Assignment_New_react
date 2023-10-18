import { useState } from 'react'
import './App.css'

import Header from './header'
import Sidebar from './Sidebar'
import Home from './home'

function App() {

  const [openSidebarToggle, setOpenSidebarToggle]= useState(false)

  const openSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle);
  }
  return (
    <div className='grid-container'>
      <Header openSidebar= {openSidebar}/>
      <Sidebar openSidebarToggle= {openSidebarToggle} openSidebar= {openSidebar}/>
      <Home/>

    </div>
  )
}

export default App
