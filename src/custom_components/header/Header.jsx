import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './headerStyle.css'
function Header() {
  const [navbar, setNavbar] = useState(false)
  const [hash,sethash]=useState(null)
  const url = window.location.href;
  const parsedUrl = new URL(url);
  const hashed = parsedUrl.hash;
  const cleanHash = hashed.slice(1);
  useState(()=>{
    if(cleanHash){
      sethash(cleanHash)
    }
  },[cleanHash])
  const changeBackground = () => {
    sethash(cleanHash)
    if (window.scrollY >= 2) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground)

  function DrawerToggle() {
    const element = document.getElementById("drawer_menu_item_mobile");
    if (element) {
      if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  }

  return (
    <div className='header_main_container' style={{backdropFilter:navbar?'blur(100px)':'none'}}>
      <div className='header_menu_text_container'>
        <div className='header_mobile_menu_icon' onClick={DrawerToggle}>
              <AiOutlineMenu/>
        </div>
          <div className='header_name'>
            <p>Portfolio_V0</p>
          </div>
      </div>
       <div className='header_actions_main_container'>
        <div className='header_menu_item_list_container'>
            <a href="#home" className={hash ==="home"?'header_action selected':"header_action not_selected"}>Home</a>
            <a href="#skills" className={hash ==="skills"?'header_action selected':"header_action not_selected"}>Skills</a>
            <a href="#experience" className={hash ==="experience"?'header_action selected':"header_action not_selected"}>Experience</a>
            <a href="#project"  className={hash ==="project"?'header_action selected':"header_action not_selected"}>Project</a>
            <a href="#connect_with_me" className={hash ==="connect_with_me"?'header_action selected':"header_action not_selected"}>Connect with Me</a>
        </div>
       
        <p className='nav_download_resume' onClick={()=>{
               window.open('https://drive.google.com/file/d/1nII40QjdIXPCMilXbewwKgcxhSWIQQCR/view', '_blank').focus();
             }}>Resume</p>
       </div>
       <div className="drawer_menu_item_mobile" id="drawer_menu_item_mobile">
       <div className="drawer_menu_items_container">
       <AiOutlineClose
                className="drawer_close_button"
                onClick={DrawerToggle}
              />
       <div className="drawer_menu_item_list_container">
       <a href="#home" className={hash ==="home"?'header_action selected':"header_action not_selected"} onClick={DrawerToggle}>Home</a>
        <a href="#skills" className={hash ==="skills"?'header_action selected':"header_action not_selected"} onClick={DrawerToggle}>Skills</a>
        <a href="#experience" className={hash ==="experience"?'header_action selected':"header_action not_selected"} onClick={DrawerToggle}>Experience</a>
        <a href="#project"  className={hash ==="project"?'header_action selected':"header_action not_selected"} onClick={DrawerToggle}>Project</a>
        <a href="#connect_with_me" className={hash ==="connect_with_me"?'header_action selected':"header_action not_selected"} onClick={DrawerToggle}>Connect with Me</a>
        <p className='nav_download_resume'onClick={()=>{
               window.open('https://drive.google.com/file/d/1nII40QjdIXPCMilXbewwKgcxhSWIQQCR/view', '_blank').focus();
             }}>Resume</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Header