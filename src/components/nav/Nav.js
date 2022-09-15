import React from 'react'
import "./Nav.css"
import {useState} from "react"


function Nav() {
const [toggle,setToggle]= useState(false)
const [screenWidth,setscreenWidth]=useState(window.innerWidth)
const [isopen,setisopen]=useState(false)

function toggleNav(){
  
    setisopen(!isopen)

}


  return (
    <div className='container'>
   
   <div className="topbar">
    <div className="logo">
    <h1><a href="/">Siddarth Sai</a> </h1>
    </div>
  
    <div className="navItems">

    <i class="fa-solid fa-bars"  onClick={toggleNav}></i>
    <div className={isopen ||screenWidth<700? 'navlinksClosed' : ''}>
        <ul>
        <li><a href="/">Quotes</a> </li>
        <li><a href="/jokes">Chuck </a> </li>
        <li><a href="/lyrics">Kanye</a> </li>
        </ul></div>

        
      
    </div>

</div>


    </div>
  )
}

export default Nav