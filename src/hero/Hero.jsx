import React from 'react'
import HeroAbstract from "../assets/HeroAbstract.png"
import HeroImage from "../assets/HeroImage.png"
import "./HeroStyle.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Hero() {
  
  return (
    <div id="home" className='hero_main_container'>
      <div  className='hero_main_content_0'>
        <p className='hero_hi_text'>Hi &#128075;</p>
        <p className='hero_Sub_text'>I’m  <span className='hero_Sub_text_main'> Sajin S Kumar </span>, Software Engineer</p>
        <p className='hero_description'>Proficient software engineer skilled in JavaScript, TypeScript, Java, Python, React, React Native, Node.js, Express.js, MongoDB, SQL, Redux, MobX, HTML, CSS, Tailwind CSS, and a range of related technologies.</p>
          <div className='hero_actions'>
             <div className='hero_download_Resume' onClick={()=>{
               window.open('https://drive.google.com/file/d/1nII40QjdIXPCMilXbewwKgcxhSWIQQCR/view', '_blank').focus();
             }}><p>Resume</p></div>
             <FaGithub  className='hero_action_github' onClick={()=>{
               window.open('https://github.com/sajinskumar132', '_blank').focus();
             }}/>
             <FaLinkedin  className='hero_action_linked_in' onClick={()=>{
               window.open('https://www.linkedin.com/in/sajin-s-kumar-90b26720a', '_blank').focus();
             }}/>
          </div>
      </div>
      <div className='hero_main_content_1' >
        <img src={HeroImage}/>
      </div>
     
    </div>
  )
}

export default Hero