import React from 'react'
import { skills } from './SkillHelper'
import './SkillStyle.css'
function Skills() {
  return (
    <div id="skills">
      <p className='skill_main_title'>My Tech Stack</p>
      <p className='skill_sub_title'>Technologies I’ve been working with recently</p>
      <div className='skills_list_main_container'>
        {skills.map((item,index)=>(
          <div>
            <img src={item.image} className='skill_item_image'/>
            <p className='skill_item_name'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills